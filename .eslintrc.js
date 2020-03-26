module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:jest/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "jest"
    ],
    "rules": {
        "semi": ["error", "always"], // 세미콜론 강제
        "quotes": ["error", "single"], // 작은 따옴표만 사용
        "@typescript-eslint/explicit-function-return-type": "off", // 함수의 반환 타입 지정 안해도 됨
        "@typescript-eslint/no-explicit-any": 1, // any 타입 되도록 쓰지 말 것
        "@typescript-eslint/no-inferrable-types": [
            "warn", {
                "ignoreParameters": true // 이게 뭐였지?
            }
        ],
        "@typescript-eslint/no-unused-vars": "warn" // 변수 선언에서 var 키워드 사용하지 말 것
    }
};