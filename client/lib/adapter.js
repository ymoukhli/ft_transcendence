export default function PostgresAdapter(client, options = {}) {
	return {
		async createUser(user) {
			try {
				const sql = `
        INSERT INTO users (name, email, emailverified, image) 
        VALUES ($1, $2, $3, $4)
        RETURNING id, name, email, emailverified, image`;
			let result = await client.query(sql, {params : [user.name, user.email, user.emailVerified, user.image]});
			console.log(`creating user : `);
			console.log(user);
			console.log(result.rows[0])

			const [id, name, email, emailverified, image] = result.rows[0];
			return {id,name,email,emailverified,image}
			} catch (err) {
				console.log('creating user error : ',err);
				return;
			}
		},
		async getUser(id) {
			try {
				// const sql = `select * from users where id = $1`;
				// let result = await client.query(sql, [id]);
				// console.log(`getting user by id : ${result}`);
				// return result.rows[0];
				console.log('getting user');
				console.log(id);
			} catch (err) {
				console.log(err);
				return;
			}
		},
		async getUserByEmail(email) {
			try {
				// console.log('GETING EMAIL', email)
				// const sql = `select * from users where email = $1`;
				// let result = await client.query(sql, {params: [email]});
				// console.log(`getting user by email : ${result}`);
				// return result.rows[0];
				console.log('getuserbyemail')
				console.log(email);
			} catch (err) {
				console.log(err);
				return;
			}
		},
		async getUserByAccount(data) {
			try {
		// 		const sql = `
        //   select u.* from users u join accounts a on u.id = a.user_id 
        //   where 
        //   a.provider_id = $1
        //   and 
        //   a.provider_account_id = $2`;
		// 		console.log({client});
		// 		console.log({providerAccountId});
		// 		console.log({provider});
		// 		console.log({arr})
		// 		const result = await client.query(sql, { params: [provider, providerAccountId]});
		// 		console.log(`create user by account ${result}`)
		// 		return result.rows[0];
			console.log('getuserbyaccount');
			console.log(data)
			return;
			} catch (err) {
				console.log(err);
			}
		},
		async updateUser(user) {
			try {
				console.log('updating user ');
				console.log(user);
				return;
			} catch (err) {
				console.log(err);
				return;
			}
		},
		async linkAccount(account) {
			try {
				const sql = `
        insert into accounts 
        (
			userId, 
			id_token, 
			token_type, 
			scope, 
			access_token,
			providerAccountId,
			type,
			provider
        )
        values ($1, $2, $3, $4, $5, to_timestamp($6))`;
				const params = [
					account.userId,
					account.provider,
					account.type,
					account.providerAccountId,
					account.access_token,
					account.expires_at,
				];

		// 		await client.query(sql, {params});
		// 		return account;
		console.log('linking account');
		console.log(account);
		return ;
			} catch (err) {
				console.log(err);
				return;
			}
		},
		async createSession(data) {
			try {
				const sql = `insert into sessions (userId, expires, session_token) values ($1, $2, $3)`;
				let result = await client.query(sql, { params:[data.userId, data.expires, data.sessionToken]});
				const [sessionToken, userId, expires] = result;
				return { sessionToken, userId, expires };
			} catch (err) {
				console.log(err);
				return;
			}
		},
		async getSessionAndUser(sessionToken) {
			try {
				// let result;
				// result = await client.query("select * from sessions where session_token = $1", [sessionToken]);

				// let session = result.rows[0];

				// result = await client.query("select * from users where id = $1", { params:[session.user_id]});
				// let user = result.rows[0];

				// return {
				// 	session,
				// 	user,
				// };
				console.log('get session and user');
				console.log(sessionToken);
				return ;
			} catch (err) {
				console.log(err);
				return;
			}
		},
		async updateSession(data) {
			console.log("updateSession");
			console.log(data);
			return;
		},
		async deleteSession(sessionToken) {
			try {
				// const sql = `delete from sessions where session_token = $1`;
				// await client.query(sql, { params:[sessionToken]});
				console.log('deleting session token');
				console.log(sessionToken);
				return;
			} catch (err) {
				console.log(err);
				return;
			}
		},
	};
}