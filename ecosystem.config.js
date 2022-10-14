module.exports = {
  apps : [{
    name   : "shariff",
    script : "npm run start:dev",
    env: {
	    NODE_ENV: "development",
            PORT: "5000"	    
      },
  }],
};
