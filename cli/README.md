<h1 align="center">Baptiste LECHAT Boilerplate CLI 🚀</h1>

A CLI for use baptistelechat-boilerplate for easily bootstrap a new project using NextJS.

## ✨ Getting Started

These instructions will guide you on how to install and use the Baptiste LECHAT Boilerplate CLI to create a new project.

![create new project](https://github.com/baptistelechat/baptistelechat-boilerplate/blob/main/cli/screenshot/create-new-project.png?raw=true)


### 🚩 Prerequisites

You have to install node on your machine : https://nodejs.org/en/download/

### 💻 Installing the CLI

To install the Baptiste LECHAT Boilerplate CLI, run the following command:

```bash
npm install -g @baptistelechat/boilerplate
```

### 🛠️ Using the CLI

To create a new project using the Baptiste LECHAT Boilerplate CLI, follow these steps:

Step 1 → After installing the CLI, run this command with the project name :

```bash
@baptistelechat/boilerplate -n my-new-project
```

You can also use npx or yarn dlx or pnpm dlx to run the CLI without installing it globally:
```bash
npx @baptistelechat/boilerplate -n my-new-project
# or
yarn dlx @baptistelechat/boilerplate -n my-new-project
# or
pnpm dlx @baptistelechat/boilerplate -n my-new-project
```

Step 2 → Navigate to the newly created project directory :

```bash
cd my-new-project
```

Step 3 → Start your local server :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Step 4 → Open a browser and go to localhost :

```bash
localhost:3000
```

### 📚 Commands
The Baptiste LECHAT Boilerplate CLI provides the following commands:

**💡 Remind you can also use npx, yarn dlx, or pnpm dlx to run the CLI without installing it globally**

## Project Name
Specify the name of your new project using the -n or --name flag:

```bash
@baptistelechat/boilerplate -n my-new-project
# or
@baptistelechat/boilerplate --name my-new-project
```

## Installer
Choose a package installer for your project. The available options are npm, yarn, and pnpm. By default, the CLI uses pnpm as the package installer:

```bash
@baptistelechat/boilerplate -i yarn -n my-new-project
# or
@baptistelechat/boilerplate --installer npm -n my-new-project
```
Note that if you don't specify an installer, the CLI will use pnpm as the default package installer:

```bash
@baptistelechat/boilerplate -n my-new-project
```

## Help
Display help information for the CLI:

```bash
@baptistelechat/boilerplate -h
# or
@baptistelechat/boilerplate --help
```
![help](https://github.com/baptistelechat/baptistelechat-boilerplate/blob/main/cli/screenshot/help.png?raw=true)

## 🏗 Technical Stack

This coilerplate use :
- NextJS → https://nextjs.org/
- TypeScript → https://fr.reactjs.org/
- Shadcn/ui → https://ui.shadcn.com/
- Zod → https://zod.dev/
- Zustand → https://github.com/pmndrs/zustand 
- Auto-form → https://github.com/vantezzen/auto-form/tree/main
- Framer Motion → https://www.framer.com/motion/

## 😸 Maintainers

This project is mantained by:

- [Baptiste LECHAT - baptistelechat](https://github.com/baptistelechat)

## 👨‍💻👩‍💻 Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -m 'Add some feature')
4. Push your branch (git push origin my-new-feature)
5. Create a new Pull Request

## ⭐ Show your support

Give a ⭐️ for support the project or if this project helped you !

## 😂 Gitmoji

This project use Gitmoji : "An emoji guide for your commit messages".

<p align="left">
	<a href="https://gitmoji.carloscuesta.me">
		<img src="https://cloud.githubusercontent.com/assets/7629661/20073135/4e3db2c2-a52b-11e6-85e1-661a8212045a.gif" width="250" alt="gitmoji">
	</a>
</p>
<p align="left">
	<a href="https://travis-ci.org/carloscuesta/gitmoji">
		<img src="https://img.shields.io/travis/carloscuesta/gitmoji/master?style=flat-square"
			 alt="Build Status">
	</a>
	<a href="https://gitmoji.carloscuesta.me">
		<img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
			 alt="Gitmoji">
	</a>
</p>
