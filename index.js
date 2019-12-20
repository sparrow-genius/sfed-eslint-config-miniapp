module.exports = {
  root: true,
  // 运行环境
  'env': {
    'browser': true,
    'es6': true
  },
  // 启用推荐的规则，报告一些常见的问题
  'extends': ['airbnb-base', 'eslint:recommended'],
  // 'extends': [],
  // 脚本在执行期间访问的额外的全局变量
  globals: {
    wx: 'readonly',
    App: 'readonly',
    Page: 'readonly',
    Component: 'readonly',
    getCurrentPages: 'readonly',
    getApp: 'readonly',
  },
  // 解析选项
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  // 启用的规则及其各自的错误级别
  'rules': {
    'no-underscore-dangle': ['error', { allow: ['_this'] }], // 禁止标识符中有下划线，允许_this
    'no-param-reassign': ['warn', { props: false }], // 禁止对参数重新复制，允许修改参数的属性（新增、赋值、删除）
    'no-unused-expressions': ['warn', { allowShortCircuit: true }], // 禁止无用的表达式，允许短路：fn && fn()
    'no-plusplus': 'off', // 允许++ --
    'no-shadow': 'warn', // 声明外层作用域中使用过得变量名
    'max-len': 'warn',
    'guard-for-in': 'warn',
    'no-restricted-syntax': 'warn',

    // 谨慎！容易产生逻辑错误的地方：
    'no-continue': 'off',

    // --fix 缩进:2 个空格缩进
    // https://eslint.bootcss.com/docs/rules/indent/
    'indent': ['error', 2, { SwitchCase: 1 }],
    // --fix 强制使用 Unix 换行符： \n
    // https://eslint.bootcss.com/docs/rules/linebreak-style/
    'linebreak-style': ['off', 'unix'],
    // --fix 强制使用一致的反勾号、双引号或单引号:要求尽可能地使用单引号,允许字符串使用反勾号
    // https://eslint.bootcss.com/docs/rules/quotes/
    'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
    // --fix 要求或禁止使用分号代替 ASI:要求在语句末尾使用分号
    // https://eslint.bootcss.com/docs/rules/semi/
    // 'semi': ['error', 'always'],
    // --fix 强制分号之前和之后使用一致的空格:它强制分号之后有空格，禁止分号之前有空格
    // https://eslint.bootcss.com/docs/rules/semi-spacing/
    'semi-spacing': 'warn',
    // --fix 要求使用 === 和 !==:强制在任何情况下都使用 === 和 !==
    // https://eslint.bootcss.com/docs/rules/eqeqeq/
    'eqeqeq': ['warn', 'smart'],
    // --fix 强制数组方括号中使用一致的空格:禁止在数组括号内出现空格
    // https://eslint.bootcss.com/docs/rules/array-bracket-spacing/
    'array-bracket-spacing': ['error', 'never'],
    // --fix 强制在代码块中使用一致的大括号风格:强制 one true brace style(一个真正的大括号样式),允许块的开括号和闭括号在 同一行
    // https://eslint.bootcss.com/docs/rules/brace-style/
    'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
    // --fix 要求或禁止末尾逗号:当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
    // https://eslint.bootcss.com/docs/rules/comma-dangle/
    'comma-dangle': ['error', 'only-multiline'],
    // --fix 强制在逗号前后使用一致的空格:禁止在逗号前使用空格, 要求在逗号后使用一个或多个空格
    // https://eslint.bootcss.com/docs/rules/comma-spacing/
    'comma-spacing': ['warn', { 'before': false, 'after': true }],
    // --fix 强制使用一致的逗号风格:要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    // https://eslint.bootcss.com/docs/rules/comma-style/
    'comma-style': ['error', 'last'],
    // --fix 强制在计算的属性的方括号中使用一致的空格:禁止在计算属性内使用空格  obj[foo]  obj['foo']  let x = {[b]: a}  obj[foo[bar]]
    // https://eslint.bootcss.com/docs/rules/computed-property-spacing/
    'computed-property-spacing': ['error', 'never'],
    // --fix 要求或禁止在函数标识符和其调用之间有空格:禁止在函数名和开括号之间有空格  fn();
    // https://eslint.bootcss.com/docs/rules/func-call-spacing/
    'func-call-spacing': ['error', 'never'],
    // --fix 强制在函数括号内使用一致的换行:如果函数的任一参数有换行，则要求在函数括号内换行。否则禁止换行。  function foo(bar, baz) {}
    // https://eslint.bootcss.com/docs/rules/function-paren-newline/
    // 'function-paren-newline': ['error', 'multiline'],
    // --fix 强制隐式返回的箭头函数体的位置: 禁止在箭头函数体之前出现换行。  (foo) => bar;
    // https://eslint.bootcss.com/docs/rules/implicit-arrow-linebreak/
    'implicit-arrow-linebreak': ['error', 'beside'],
    // --fix  强制在对象字面量的属性中键和值之间使用一致的间距:禁止在对象字面量的键和冒号之间存在空格  let obj = { 'foo': 42 };
    // https://eslint.bootcss.com/docs/rules/key-spacing/
    'key-spacing': ['error', { 'beforeColon': false }],
    // --fix 强制在关键字前后使用一致的空格:要求在关键字之前,之后至少有一个空格,
    // 该规则强制关键字和类似关键字的符号周围空格的一致性：as、async、await、break、case、catch、class、const、continue、debugger、default、delete、do、else、export、extends、finally、for、from、function、get、if、import、in、instanceof、let、new、of、return、set、static、super、switch、this、throw、try、typeof、var、void、while、with 和 yield。该规则不会与其它空格规则发生冲突：它并不应用于别的规则会报告问题的空格。
    // https://eslint.bootcss.com/docs/rules/keyword-spacing/
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    // --fix 要求在注释周围有空行:要求在块级注释之前有一空行
    // https://eslint.bootcss.com/docs/rules/lines-around-comment/
    'lines-around-comment': ['warn', { 'beforeBlockComment': true, allowBlockStart: true }],
    // --fix 要求或禁止类成员之间出现空行:要求在类成员之后有一行空行,跳过对单行类成员之后的空行的检查
    // https://eslint.bootcss.com/docs/rules/lines-between-class-members/
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    // --fix 强制或禁止调用无参构造函数时有圆括号:当通过 new 关键字调用构造函数时，要求使用圆括号，以此提高代码的清晰度。  let person = new Person();
    // https://eslint.bootcss.com/docs/rules/new-parens/
    'new-parens': 'error',
    // --fix 要求方法链中每个调用都有一个换行符:(默认为 2) 允许在同一行成链的深度
    // 该规则要求在方法链中的每个调用之后或或深度成员访问之后有一个换行符。
    // https://eslint.bootcss.com/docs/rules/newline-per-chained-call/
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    // --fix 该规则禁止 if 语句作为唯一语句出现在 else 语句块中。
    // https://eslint.bootcss.com/docs/rules/no-lonely-if/
    'no-lonely-if': 'error',
    // --fix 禁止出现多行空行:(默认为 2) 强制最大连续空行数
    // https://eslint.bootcss.com/docs/rules/no-multiple-empty-lines/
    'no-multiple-empty-lines': ["error", { "max": 3 }],
    // --fix 禁用行尾空格:该规则禁止使用行尾空白（空格、tab 和其它 Unicode 空白字符）。
    // https://eslint.bootcss.com/docs/rules/no-trailing-spaces/
    'no-trailing-spaces': ['warn', { 'skipBlankLines': false, 'ignoreComments': false }],
    // --fix 禁止可以在有更简单的可替代的表达式时使用三元操作符  let a = x === 2 ? 'Yes' : 'No';  let a = x !== false;
    // https://eslint.bootcss.com/docs/rules/no-unneeded-ternary/
    'no-unneeded-ternary': 'error',
    // --fix 禁止属性前有空白  foo[bar]  foo.bar
    // https://eslint.bootcss.com/docs/rules/no-whitespace-before-property/
    'no-whitespace-before-property': 'error',
    // --fix 强制单个语句的位置: 禁止单行语句之前有换行
    // https://eslint.bootcss.com/docs/rules/nonblock-statement-body-position/
    'nonblock-statement-body-position': ['error', 'beside'],
    // --fix 强制大括号内换行符的一致性:要求使用花括号，或者不使用或括号直接使用换行。
    // https://eslint.bootcss.com/docs/rules/object-curly-newline/
    'object-curly-newline': ['error', { 'consistent': true }],
    // --fix 强制在大括号中使用一致的空格:要求花括号内有空格 (除了 {})
    // https://eslint.bootcss.com/docs/rules/object-curly-spacing/
    'object-curly-spacing': ['error', 'always'],
    // --fix 要求或禁止在变量声明周围换行:强制每个变量初始化语句换行
    // https://eslint.bootcss.com/docs/rules/one-var-declaration-per-line/
    'one-var-declaration-per-line': ['error', 'initializations'],
    // --fix 要求或禁止在可能的情况下使用简化的赋值操作符:要求尽可能地简化赋值操作  x += y;
    // https://eslint.bootcss.com/docs/rules/operator-assignment/
    // 'operator-assignment': ['error', 'always'],
    // --fix 要求对象字面量属性名称用引号括起来
    // https://eslint.bootcss.com/docs/rules/quote-props/
    'quote-props': ['warn', 'as-needed'],
    // --fix 强制在圆括号内使用一致的空格:强制圆括号内没有空格
    // https://eslint.bootcss.com/docs/rules/space-in-parens/
    'space-in-parens': ['error', 'never'],
    // --fix 要求操作符周围有空格:此规则旨在确保中缀运算符周围有空格,允许 a|0 不带空格
    // https://eslint.bootcss.com/docs/rules/space-in--fix-ops/
    // 'space-in--fix-ops': ['warn', { 'int32Hint': false }],
    // --fix 强制在一元操作符前后使用一致的空格
    // 该规则强制 words 一元操作符后空格和 nonwords 一元操作符之前或之后的空格的一致性。
    // https://eslint.bootcss.com/docs/rules/space-unary-ops/
    'space-unary-ops': 'error',
    // --fix 强制在注释中 // 或 /* 使用一致的空格:// 或 /* 必须跟随至少一个空白
    // https://eslint.bootcss.com/docs/rules/spaced-comment/
    'spaced-comment': ['error', 'always'],
    // --fix 强制在 switch 的冒号左右有空格: 要求冒号之后又一个或多个空格,禁止冒号之前又空格
    // https://eslint.bootcss.com/docs/rules/switch-colon-spacing/
    'switch-colon-spacing': ['error', { 'after': true, 'before': false }],
    // --fix 要求或禁止在模板标记和它们的字面量之间有空格: 禁止在一个标记的函数和它的模板字面量之间有空格  func`Hello world`;
    // https://eslint.bootcss.com/docs/rules/template-tag-spacing/
    // 'template-tag-spacing': 'error',
    // --fix 要求正则表达式被括号括起来  (/foo/).test('bar');
    // 该规则旨在消除斜线运算符造成的歧义，增加代码的可读性。
    // https://eslint.bootcss.com/docs/rules/wrap-regex/
    'wrap-regex': 'error',
    // --fix 要求箭头函数体使用大括号:当大括号是可以省略的，强制不使用它们 (默认)
    // https://eslint.bootcss.com/docs/rules/arrow-body-style/
    'arrow-body-style': ['warn', 'as-needed'],
    // --fix 要求箭头函数的参数使用圆括号:当只有一个参数时允许省略圆括号,如果函数体在一个指令块中（被花括号括起来）要求使用圆括号把参数括起来。
    // https://eslint.bootcss.com/docs/rules/arrow-parens/
    'arrow-parens': ['warn', 'as-needed', { 'requireForBlockBody': true }],
    // --fix 强制箭头函数的箭头前后使用一致的空格:{ 'before': true, 'after': true }
    // https://eslint.bootcss.com/docs/rules/arrow-spacing/
    'arrow-spacing': 'error',
    // --fix 强制 generator 函数中 * 号周围使用一致的空格  function *generator() {}
    // https://eslint.bootcss.com/docs/rules/generator-star-spacing/
    'generator-star-spacing': ['error', { 'before': true, 'after': false }],
    // --fix 禁止在可能与比较操作符相混淆的地方使用箭头函数
    // https://eslint.bootcss.com/docs/rules/no-confusing-arrow/
    'no-confusing-arrow': 'error',
    // --fix 禁止在对象中使用不必要的计算属性  let foo = {['a']: 'b'}; => let foo = {'a': 'b'};
    // https://eslint.bootcss.com/docs/rules/no-useless-computed-key/
    'no-useless-computed-key': 'warn',
    // --fix 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字:这条规则进行在 import 和 export 和解构赋值时将引用重命名为相同的名字
    // https://eslint.bootcss.com/docs/rules/no-useless-rename/
    'no-useless-rename': 'error',
    // --fix 要求使用 let 或 const 而不是 var
    // https://eslint.bootcss.com/docs/rules/no-var/
    'no-var': 'warn',
    // --fix 要求或禁止对象字面量中方法和属性使用简写语法
    // https://eslint.bootcss.com/docs/rules/object-shorthand/
    'object-shorthand': 'warn',
    // --fix 要求回调函数使用箭头函数
    // https://eslint.bootcss.com/docs/rules/prefer-arrow-callback/
    'prefer-arrow-callback': 'error',
    // --fix 要求使用 const 声明那些声明后不再被修改的变量
    // https://eslint.bootcss.com/docs/rules/prefer-const/
    'prefer-const': 'warn',
    // --fix 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量  0b111110111 === 503;  parseInt(1);
    // https://eslint.bootcss.com/docs/rules/prefer-numeric-literals/
    'prefer-numeric-literals': 'error',
    // --fix 要求使用扩展运算符而非 .apply()
    // https://eslint.bootcss.com/docs/rules/prefer-spread/
    'prefer-spread': 'error',
    // --fix 要求使用模板字面量而非字符串连接
    // https://eslint.bootcss.com/docs/rules/prefer-template/
    'prefer-template': 'error',
    // --fix 强制剩余和扩展运算符及其表达式之间有空格:参数为默认值 'never' 时，扩展运算符及其表达式之间不允许有空格。
    // https://eslint.bootcss.com/docs/rules/rest-spread-spacing/
    'rest-spread-spacing': ['error', 'never'],
    // --fix 强制模块内的 import 排序
    // 该规则检查所有的 import 声明，验证所有的 import 都是首先按照使用的成员语法排序，其次是按照第一个成员或别名的字母顺序排序。
    // https://eslint.bootcss.com/docs/rules/sort-imports/
    // 'sort-imports': 'warn',
    // --fix 要求或禁止模板字符串中的嵌入表达式周围空格的使用:"never" (默认) - 禁止花括号内出现空格。
    // https://eslint.bootcss.com/docs/rules/template-curly-spacing/
    'template-curly-spacing': 'error',
    // --fix 强制在 yield* 表达式中 * 周围使用空格:after 强制在 * 和 参数之间有空格
    // https://eslint.bootcss.com/docs/rules/yield-star-spacing/
    'yield-star-spacing': ['error', 'after'],

    // 强制使用骆驼拼写法命名约定
    // https://eslint.bootcss.com/docs/rules/camelcase/
    'camelcase': 'warn',
    // 当获取当前执行环境的上下文时，强制使用一致的命名:该规则指定 _this 作为 this 的别名
    // https://eslint.bootcss.com/docs/rules/consistent-this/
    'consistent-this': ['warn', '_this'],
    // 要求函数名与赋值给它们的变量名或属性名相匹配:obj.foo = function foo() {};
    // https://eslint.bootcss.com/docs/rules/func-name-matching/
    'func-name-matching': 'warn',
    // 要求或禁止使用命名的 function 表达式:如果 在 ES6 环境中，这个函数名无法自动被赋值，要求函数表达式有一个名字  let bar = function() {};
    // https://eslint.bootcss.com/docs/rules/func-names/
    'func-names': ['warn', 'as-needed'],
    // 禁用指定的标识符:糟糕的名字会导致代码很难理解。通用的名字，比如 data，并不能推断出关于代码和接收到的值的更多信息。该规则允许你配置一个标识符名称的黑名单，也就是包含那些你不想在代码中看到的名字。
    // https://eslint.bootcss.com/docs/rules/id-blacklist/
    // 'id-blacklist': ['obj', 'e', 'cb', 'callback'],
    // 强制标识符的最小和最大长度:默认2，
    // 非常短的标识符名称像 e，x，_t 或非常长的名称像 hashGeneratorResultOutputContainerObject 使代码难以阅读和潜在的不可维护性。为了防止这种情况出现，应该限制标识符的最大和/或最小长度。
    // https://eslint.bootcss.com/docs/rules/id-length/
    // 'id-length': 'warn',
    // 强制行注释的位置：强制行注释只在代码上方，单独成行
    // https://eslint.bootcss.com/docs/rules/line-comment-position/
    // 'line-comment-position': ['error', { 'position': 'above' }],
    // 要求构造函数首字母大写:要求调用 new 操作符时有首字母大小的函数。允许调用首字母大写的函数时没有 new 操作符。(默认) 检查对象属性。
    // https://eslint.bootcss.com/docs/rules/new-cap/
    'new-cap': ['error', { 'newIsCap': true, 'capIsNew': false, 'properties': true }],
    // 禁止混合使用不同的操作符  let foo = (a && b < 0) || c > 0 || d + 1 === 0;
    // 封闭的复杂表达式使用括号括起来明确了开发者的意图，使代码更具可读性。
    // https://eslint.bootcss.com/docs/rules/no-mixed-operators/
    'no-mixed-operators': ['warn', { 'groups': [['&', '|', '^', '~', '<<', '>>', '>>>'], ['&&', '||']] }],
    // 禁止连续赋值
    // 对变量连续赋值可能会导致意想不到的结果，而且难以阅读
    // https://eslint.bootcss.com/docs/rules/no-multi-assign/
    'no-multi-assign': 'error',
    // 强制函数中的变量要么一起声明要么分开声明:要求每个作用域有多个变量声明
    // https://eslint.bootcss.com/docs/rules/one-var/
    'one-var': ['error', 'never'],
    // 要求在构造函数中有 super() 的调用
    // 配置文件中的 'extends': 'eslint:recommended' 属性启用了此规则。
    // https://eslint.bootcss.com/docs/rules/constructor-super/
    'constructor-super': 'error',
    // 禁止重复模块导入
    // https://eslint.bootcss.com/docs/rules/no-duplicate-imports/
    'no-duplicate-imports': ['error', { 'includeExports': true }],
    // 禁用不必要的构造函数:该规则标记可以被安全移除但又不改变类的行为的构造函数。
    // https://eslint.bootcss.com/docs/rules/no-useless-constructor/
    'no-useless-constructor': 'error',
    // 优先使用数组和对象解构
    // https://eslint.bootcss.com/docs/rules/prefer-destructuring/
    'prefer-destructuring': ['warn', { 'array': true, 'object': true }, { 'enforceForRenamedProperties': false }],
    // 要求使用剩余参数而不是 arguments
    // https://eslint.bootcss.com/docs/rules/prefer-rest-params/
    'prefer-rest-params': 'error',
    // 要求 symbol 描述  let foo = Symbol("some description");
    // https://eslint.bootcss.com/docs/rules/symbol-description/
    'symbol-description': 'error',
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'no-empty': 'warn',
    'no-dupe-keys': 'warn',
  },
};
