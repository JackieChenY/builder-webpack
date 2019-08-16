const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');
// 放在这里无法进行构建
// const prodConfig = require('../../lib/webpack.prod');

const mocha = new Mocha({
  timeout: '10000ms'
});

// 进入template目录
console.log(`当前目录为：${process.cwd()}`);
try {
  process.chdir(path.join(__dirname, 'template'));
  console.log(`进入目录：${process.cwd()}`);

  rimraf('./dist', () => {
    // 注：引入位置对路径存在影响
    const prodConfig = require('../../lib/webpack.prod');
    webpack(prodConfig, (err, stats) => {
      if (err) {
        console.error(err);
        process.exit(2);
      }

      console.log(
        stats.toString({
          colors: true,
          modules: false,
          children: false
        })
      );
      console.log('开始执行测试用例');
      mocha.addFile(path.join(__dirname, 'html-test.js'));
      mocha.addFile(path.join(__dirname, 'css-js-test.js'));
      mocha.run();
    });
  });
} catch (e) {
  console.error(`进入目录失败：${e}`);
}
