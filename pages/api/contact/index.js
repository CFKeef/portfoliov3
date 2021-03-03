import nc from "next-connect";
const { USER, PASS } = process.env;
import nodemailer from "nodemailer";

const handler = nc().post(async (req, res) => {
	// SMTP Server
	const smtp = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: USER,
			pass: PASS,
		},
	});

	// Email template
	const email = {
		from: req.body.email,
		to: USER,
		subject: req.body.name + " wants to connect at " + req.body.email,
		text: req.body.message,
	};

	smtp.sendMail(email, async (err) => {
		if (err) {
			res.send(500);
		} else res.send(200);
	});
});

export default handler;
