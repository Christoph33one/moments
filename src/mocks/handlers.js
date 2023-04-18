import { rest } from "msw";

const baseURL = "https://django-rest-project.herokuapp.com";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
      return res(
        ctx.json({
            "pk":8,
            "username":
            "admin2",
            "email":"",
            "first_name":"",
            "last_name":"",
            "profile_id":8,
            "profile_image":
        "https://res.cloudinary.com/dqgs0kltd/image/upload/v1/media/../https://res.cloudinary.com/dqgs0kltd/image/upload/v1673026752/sample.jpg"
    }
    ));
}),
rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
})
]