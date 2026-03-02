import express from 'express';
import { Response, Request, Application } from 'express';
import { getTheUser } from '../../services/user.service.js';

const UserController = {
  getUserById: async function (req: Request, res: Response, next: Function) {
    try {
      const targetUser = await getTheUser(req.body.userId);
      res.send(targetUser);
    } catch (err) {
      next(err);
    }
  }
};

export { UserController };
