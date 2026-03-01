import express from "express";
import { Response, Request, Application } from "express";

const UserController = {
  getUserById: function (req: Request, res: Response) {
    res.send(req.body)

  },

  getUserByUserId: function (req: Request, res: Response) {},

  getuserByEmailId: function (req: Request, res: Response) {},

  updateUserById: function (req: Request, res: Response) {},

  deleterUserById: function (req: Request, res: Response) {},
};

export { UserController };
