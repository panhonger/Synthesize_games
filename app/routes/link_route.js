let express = require('express');
let router = express.Router();
const appUtils = require('../utils/app_utils');

//跳转扫雷页面
router.get("/mineClearPage",function(req, res){
    res.render("mineClear/mineIndex.hbs")
});
//跳转扫雷页面2
router.get("/mineClearPages",function(req, res){
    res.render("mineClear/mineIndexs.hbs")
});
//贪吃蛇
router.get("/gluSnakePage",function(req, res){
    res.render("Gluttonous_Snake/snake_index.hbs")
});
//切水果
router.get("/fruitSlicePage",function(req, res){
    res.render("Fruit_Slice/Fruit_index.hbs")
});
//蜘蛛纸牌
router.get("/spiSolitairePage",function(req, res){
    res.render("spider_solitaire/spiSolitaire_index.hbs")
});
//拼图
router.get("/jigsawPage",function(req, res){
    res.render("jigsaw/ jigsaw_index.hbs")
});
//射击游戏
router.get("/shootPage",function(req, res){
    res.render("shoot/shoot_index.hbs")
});
//五子棋
router.get("/gobangPage",function(req, res){
    res.render("gobang/gobang_index.hbs")
});
//俄罗斯方块
router.get("/tetrisPage",function(req, res){
    res.render("tetris/tetris_index.hbs")
});

router.get("/sudokuPage",function(req, res){
    res.render("sudoku/sudoku_index.hbs")
});
module.exports = router;