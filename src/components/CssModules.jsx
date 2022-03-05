import classes from '../scss/CssModules.module.scss';

export const CssModules = () => {

    return (

        <div className={classes.container}>
            <p className={classes.title}>CssModulesです</p>
            <button className={classes.button}>ボタン</button>
        </div>
    );

};
