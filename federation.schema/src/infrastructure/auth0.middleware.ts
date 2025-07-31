// src/infrastructure/auth0.middleware.ts

import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import jwksRsa from 'jwks-rsa';

const { domain, audience } = {
  domain: 'dev-2rq8z05wzol3yhvo.us.auth0.com',
  audience: 'https://dev-2rq8z05wzol3yhvo.us.auth0.com/api/v2/',
};


passport.use(
  new BearerStrategy(async (token, done) => {
    
    try {
      const client = jwksRsa({
        jwksUri: `https://${domain}/.well-known/jwks.json`,
      });

      const decoded: any = jwt.decode(token, { complete: true });

      if (!decoded || typeof decoded === 'string') {
        return done(null, false);
      }

      const key = await client.getSigningKey(decoded.header.kid);
      const publicKey = key.getPublicKey();

      const verified = jwt.verify(token, publicKey, {
        audience,
        issuer: `https://${domain}/`,
        algorithms: ['RS256'],
      });

      console.log("done",verified)
      return done(null, verified);
    } catch (err) {
      return done(null, false);
    }
  })
);

export const auth0Middleware = passport.authenticate('bearer', { session: false });

