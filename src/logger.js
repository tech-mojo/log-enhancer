import chalk from 'chalk';
import styles from './styles.json' assert { type: 'json' };
import themes from './themes.json' assert { type: 'json' };

export default class logger {
    constructor(theme = 'default', style = 'colors') {
        this.setTheme(theme);
        this.setStyle(style);

        return new Proxy(this, {
            get(target, prop) {
                if (typeof target[prop] === 'function') {
                    return target[prop].bind(target);
                } else {
                    return target['log'].bind(target);
                }
            }
        });
    }

    setTheme(theme) {
        if (!themes[theme]) {
            console.warn(`Theme '${theme}' not found. Using default theme.`);
            theme = 'default';
        }
        this.theme = themes[theme];
        this.themeName = theme;
    }

    setStyle(style) {
        if (!styles[style]) {
            console.warn(`Style '${style}' not found. Using default style.`);
            style = 'colors';
        }
        this.style = styles[style];
        this.styleName = style;
    }

    log(...args) {
        const { log } = this.style;
        switch (this.styleName) {
            case 'colors':
                console.log(chalk.hex(this.theme.log)(args.join(' ')));
                break;
            case 'unicode':
                console.log(
                    `${chalk.hex(this.theme.log)(log)} ${args.join(' ')}`
                );
                break;
            case 'labels':
                console.log(
                    `${chalk.bgHex(this.theme.log)(` ${log} `)} ${args.join(
                        ' '
                    )}`
                );
                break;
            default:
                console.log(`${log} ${args.join(' ')}`);
        }
    }

    warn(...args) {
        const { warn } = this.style;
        switch (this.styleName) {
            case 'colors':
                console.warn(chalk.hex(this.theme.warn)(args.join(' ')));
                break;
            case 'unicode':
                console.warn(
                    `${chalk.hex(this.theme.warn)(warn)} ${args.join(' ')}`
                );
                break;
            case 'labels':
                console.warn(
                    `${chalk.bgHex(this.theme.warn)(` ${warn} `)} ${args.join(
                        ' '
                    )}`
                );
                break;
            default:
                console.warn(`${warn} ${args.join(' ')}`);
        }
    }

    info(...args) {
        const { info } = this.style;
        switch (this.styleName) {
            case 'colors':
                console.info(chalk.hex(this.theme.info)(args.join(' ')));
                break;
            case 'unicode':
                console.info(
                    `${chalk.hex(this.theme.info)(info)} ${args.join(' ')}`
                );
                break;
            case 'labels':
                console.info(
                    `${chalk.bgHex(this.theme.info)(` ${info} `)} ${args.join(
                        ' '
                    )}`
                );
                break;
            default:
                console.info(`${info} ${args.join(' ')}`);
        }
    }

    success(...args) {
        const { success } = this.style;
        switch (this.styleName) {
            case 'colors':
                console.log(chalk.hex(this.theme.success)(args.join(' ')));
                break;
            case 'unicode':
                console.log(
                    `${chalk.hex(this.theme.success)(success)} ${args.join(
                        ' '
                    )}`
                );
                break;
            case 'labels':
                console.log(
                    `${chalk.bgHex(this.theme.success)(
                        ` ${success} `
                    )} ${args.join(' ')}`
                );
                break;
            default:
                console.log(`${success} ${args.join(' ')}`);
        }
    }

    error(...args) {
        const { error } = this.style;
        switch (this.styleName) {
            case 'colors':
                console.error(chalk.hex(this.theme.error)(args.join(' ')));
                break;
            case 'unicode':
                console.error(
                    `${chalk.hex(this.theme.error)(error)} ${args.join(' ')}`
                );
                break;
            case 'labels':
                console.error(
                    `${chalk.bgHex(this.theme.error)(` ${error} `)} ${args.join(
                        ' '
                    )}`
                );
                break;
            default:
                console.error(`${error} ${args.join(' ')}`);
        }
    }
}
