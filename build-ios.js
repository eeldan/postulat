const styleDictionary = require('./registerFormat.js');

const webStyleDictionary = styleDictionary.extend({
    source: [`tokens/**/*.json`],
    platforms: {
        ios: {
            transformGroup: "ios-swift",
            transforms: ["name/cti/camel", "color/UIColor"],
            buildPath: "build/ios/",
            files: [
                {
                    destination: "Colors.swift",
                    format: "ios-swift/enum.swift",
                    className: "Colors",
                    filter: {
                        type: "color"
                    }
                },
                {
                    destination: "FontFamilies.swift",
                    format: "ios-swift/enum.swift",
                    className: "FontFamilies",
                    filter: {
                        type: "fontFamilies"
                    }
                }
            ]
        },
    }
})

webStyleDictionary.buildPlatform('ios')
