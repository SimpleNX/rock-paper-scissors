# Included in Game

## Function that randomly returns rock, paper or scissors:
---
A function named getComputerChoice() using Math.random to generate
numbers for the computer's choice to play.

## Function that takes in human choice 
---
A function named getHumanChoice() that accepts the user's input by 
using prompt().

## Variable to keep track of scores of human and computer
---
Variables humanScore and computerScore initialised to 0. In global scope.

## Logic to conduct a round

A function named playRound() which accepts two arguments : 
humanChoice and computerChoice, converts them to lower-case,
and prints the appropriate result of the round.
And increments the scores.

## Logic to play a complete game
---
A function named playGame(), when invoked conducts five rounds.
The playRound function and score variables are declared inside the playGame function.