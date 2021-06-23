

install: # Install dependencies after first cloning or deleting node_modules
		npm ci

brain-games: # Launch brain-games.js file
		node bin/brain-games.js

publish: # Publication of the package
		npm publish --dry-run

lint: # Launch eslint check
		npx eslint .
