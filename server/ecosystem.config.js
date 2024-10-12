module.exports = {
    apps: [
      {
        name: "scrumX",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };