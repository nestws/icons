const { exec } = require('child_process');

const tasks = {
    svgo: [
        'brands', 'commerce', 'files', 'general', 'kitchen',
        'media', 'real-estate', 'social', 'touch', 'weather'
    ],
    sprite: [
        'brands', 'commerce', 'files', 'general', 'kitchen',
        'media', 'real-estate', 'social', 'touch', 'weather'
    ],
    react: [
        { name: 'brands', categoryName: 'Brands' },
        { name: 'commerce', categoryName: 'Commerce' },
        { name: 'files', categoryName: 'Files' },
        { name: 'general', categoryName: 'General' },
        { name: 'kitchen', categoryName: 'Kitchen' },
        { name: 'media', categoryName: 'Media' },
        { name: 'real-estate', categoryName: 'Real Estate' },
        { name: 'social', categoryName: 'Social' },
        { name: 'touch', categoryName: 'Touch' },
        { name: 'weather', categoryName: 'Weather' }
    ]
};

function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${stderr}`);
                reject(error);
            } else {
                console.log(stdout);
                resolve();
            }
        });
    });
}

async function runSvgo() {
    for (const category of tasks.svgo) {
        console.log(`Running SVGO for ${category}...`);
        await runCommand(`svgo -f svg/${category}`);
    }
}

async function runSprite() {
    for (const category of tasks.sprite) {
        console.log(`Creating sprite for ${category}...`);
        await runCommand(`svgstore -o sprite/${category}.svg svg/${category}/*.svg`);
    }
}

async function runReact() {
    for (const { name, categoryName } of tasks.react) {
        console.log(`Generating react components for ${name}...`);
        await runCommand(`node icons-react --src=svg/${name} --dest=react/${name} --categoryName="${categoryName}"`);
    }
}

async function buildIcons() {
    try {
        console.log('Starting SVGO tasks...');
        await runSvgo();

        console.log('Starting sprite generation...');
        await runSprite();

        console.log('Starting react component generation...');
        await runReact();

        console.log('Icon build process completed successfully!');
    } catch (error) {
        console.error('Icon build process failed:', error);
    }
}

buildIcons();