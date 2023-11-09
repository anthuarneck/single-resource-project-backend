const express = require("express")
const {
    getAllFavoriteGames,
    createFavoriteGame,
    deleteFavoritedGame
} = require("../queries/favorited_games")

