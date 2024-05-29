const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
    name: "color/UIColor",
    type: 'value',
    excludeParentKeys: true,
    matcher: prop => {
        return prop.type
    },
    transformer: prop => {
        if (prop.type === 'color') {
            const hex = prop.value.slice(1)
            const [r, g, b] = hex.match(/.{1,2}/g).map(hex => parseInt(hex, 16) / 255);
            const a = 1
            return `UIColor(red: ${r.toFixed(2)}, green: ${g.toFixed(2)}, blue: ${b.toFixed(2)}, alpha: ${a.toFixed(2)})`;
        } else if (prop.type === 'fontFamilies') {
            return `"${prop.value}"`
        }
    }
})

module.exports = StyleDictionary;
