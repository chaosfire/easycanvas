/** ********** *
 *
 * Button
 * - TODO: Toggle state.
 *
 * ********** **/

import text2image from './text2image.js';

const inBrowser = typeof window !== 'undefined';

const defaultStyle = {
    padding: 0,
    width: 300,
    family: '"Helvetica Neue",Helvetica,Arial,sans-serif',
};

let ec;

const setStyle = function (buttonStyle, config) {
    buttonStyle.buttonStyleNormal = Object.assign(defaultStyle, {
        minWidth: config.style.tw,
        lineHeight: config.style.th,
        padding: 0,
    }, config.props.normal);
    buttonStyle.buttonStyleHovered = Object.assign({},
        buttonStyle.buttonStyleNormal, config.props.hovered);
    buttonStyle.buttonStylePressed = Object.assign({},
        buttonStyle.buttonStyleNormal, config.props.pressed);
    // const buttonStyleToggled = Object.assign({}, buttonStyleNormal, opt.props.toggled);

    buttonStyle.imageNormal = text2image(config.props.text || '', buttonStyle.buttonStyleNormal);
    buttonStyle.imageHovered = config.props.hovered && text2image(config.props.text || '', buttonStyle.buttonStyleHovered);
    buttonStyle.imagePressed = config.props.pressed && text2image(config.props.text || '', buttonStyle.buttonStylePressed);
    // const imageToggled = text2image(opt.props.text || '', buttonStyleToggled);
};

const component = function (opt) {
    let $sprite;

    let option = opt || {};
    opt.props = opt.props || {};

    const buttonStyle = {
        buttonStyleNormal: undefined,
        buttonStyleHovered: undefined,
        buttonStylePressed: undefined,
        imageNormal: undefined,
        imageHovered: undefined,
        imagePressed: undefined,
    };

    setStyle(buttonStyle, opt);

    const events = {};
    opt.events = opt.events || {};
    events.touchmove = events.mousemove = () => {
        $sprite.content.img = buttonStyle.imageHovered || buttonStyle.imageNormal;
    };
    events.touchstart = events.mousedown = () => {
        $sprite.content.img = buttonStyle.imagePressed || buttonStyle.imageHovered || buttonStyle.imageNormal;
    };
    events.touchend = events.touchout = events.mouseout = () => {
        $sprite.content.img = buttonStyle.imageNormal;
    };
    events.mouseup = () => {
        $sprite.content.img = buttonStyle.imageHovered || buttonStyle.imageNormal;
    };
    events.click = (e) => {
        opt.events.click && opt.events.click.call($sprite, e);
    };

    $sprite = new ec.class.sprite({
        name: opt.name || ('button_' + opt.props.text),
        content: {
            img: buttonStyle.imageNormal,
        },
        style: opt.style,
        props: opt.props,
        events: events,
        hooks: opt.hooks,
    });

    // $sprite.on('ticked', () => {
    //     if (ec.utils.funcOrValue($sprite.props.toggled, $sprite)) {
    //         $sprite.content.img = imageToggled;
    //     } else {
    //         $sprite.content.img = imageNormal;
    //     }
    // });

    $sprite.update = function (obj) {
        this.__proto__.update.call(this, obj);
        setStyle(buttonStyle, opt);
        $sprite.content.img = buttonStyle.imageNormal;
    };

    return $sprite;
}

const init = function (Easycanvas, namespace) {
    ec = Easycanvas;
    if (namespace) {
        Easycanvas.class[namespace] = component;
    }
    return component;
};

if (inBrowser && window.Easycanvas) {
    ec = Easycanvas;
    Easycanvas.class.button = component;
} else {
    module.exports = init;
}
