"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// Combine all games from different categories
const allGames = [
  {
    description:
      "2048 is a single-player sliding block puzzle game designed by Italian web developer Gabriele Cirulli.",
    developer: "Gabriele Cirulli",
    id: "2048",
    image: "2048.png",
    name: "2048",
    platform: "Mobile",
    releaseDate: "?",
    tags: ["casual", "strategy"],
  },
  {
    description:
      "A Dark Room is a text-based adventure game where you have to survive in a dark room. The game is simple, but it's hard to master.",
    developer: "Dylan",
    id: "a-dark-room",
    image: "a-dark-room.png",
    platform: "Mobile",
    name: "A Dark Room",
    tags: ["adventure", "casual", "simulation"],
  },
  {
    description:
      "A hybrid of Mastermind and the Android pattern lock. A game you gonna love to hate.",
    developer: "maxwellito",
    id: "breaklock",
    image: "breaklock.png",
    platform: "Mobile",
    name: "Breaklock",
    tags: ["strategy"],
  },
  {
    description:
      "A real-time, real-fun multiplayer game. Play together in teams, upgrade your mighty battleship and destroy the enemy base.",
    developer: "Electronauts",
    embedURL: "https://battleboats.io/",
    id: "battle-boats",
    image: "battle-boats.png",
    platform: "PC",
    name: "Battleboats.io",
    tags: ["action", "multiplayer"],
  },
  {
    description: "Agar.io is a massively multiplayer online action game.",
    developer: "Matheus Valadares",
    embedURL: "https://agar.io/",
    id: "agar",
    image: "agar.png",
    name: "agar.io",
    platform: "Mobile",
    releaseDate: "?",
    tags: ["casual", "multiplayer"],
  },
  {
    description:
      "An easy to get into fully moddable First Person Shooter with advanced movement mechanics.",
    developer: "Yendis Entertainment",
    embedURL: "https://krunker.io/",
    id: "krunker",
    image: "krunker.png",
    name: "Krunker.io",
    platform: "PC",
    releaseDate: "?",
    tags: ["action", "multiplayer"],
  },
  {
    description:
      "An idle version of classic Breakout. Use multiple balls of different strength, speed and special abilities to smash a million bricks!",
    developer: "Kodiqi",
    embedURL: "https://idlebreakout.io/",
    id: "idle-breakout",
    image: "idle-breakout.png",
    platform: "Mobile",
    name: "Idle Breakout",
    tags: ["casual", "indie"],
  },
  {
    description:
      "Basketball Stars is a fun and addictive game where you have to control a basketball player and score as many points as you can. The game is simple, but it's hard to master.",
    developer: "Miniclip",
    id: "basketball-stars",
    image: "basketball-stars.png",
    platform: "Mobile",
    name: "Basketball Stars",
    tags: ["action", "multiplayer"],
  },
  {
    description:
      "Bloons TD Battles 2, also known as Battles 2 or BTDB2, is a competitive tower defense game developed and published by Ninja Kiwi.",
    developer: "Ninja Kiwi",
    emulator: "ruffle",
    id: "./ruffle/bloons-td2/bloons-td2.swf",
    image: "bloons-td2.webp",
    name: "Bloons Tower Defense 2",
    platform: "Mobile",
    releaseDate: "?",
    tags: ["action"],
  },
  {
    description:
      "Bowman is an archery game where you and an opponent take shots at each other. You win when you've hit the opponent fatally.",
    developer: "Unknown",
    emulator: "ruffle",
    id: "./ruffle/bow-man/bow-man.swf",
    image: "bow-man.png",
    platform: "PC",
    name: "Bow Man",
    tags: ["casual", "indie", "strategy"],
  },
  {
    description:
      "Build Royale.io is a 2D shooter IO game where you must build and loot to upgrade your weapons to defeat all your enemies.",
    developer: "Rivet Gaming",
    embedURL: "https://buildroyale.io/",
    id: "buildroyale",
    image: "buildroyale.png",
    platform: "PC",
    name: "BuildRoyale.io",
    tags: ["action", "multiplayer"],
  },
  {
    description:
      "COLORON is a fun and well-designed platformer. The goal is to match the color of the tower to the bouncing ball. Keep it going for as long as you can, just don't get mad.",
    developer: "Greg Hovanesyan",
    id: "coloron",
    image: "coloron.png",
    platform: "Mobile",
    name: "Coloron",
    tags: ["action", "indie"],
  },
  {
    description:
      "Combines.io is a crazy blend of action and farming where you drive a combine, harvest crops and destroy other players in heated online battles.",
    developer: "Yendis Entertainment",
    embedURL: "https://combines.io/",
    id: "combines",
    image: "combines.png",
    name: "Combines.io",
    platform: "Mobile",
    releaseDate: "?",
    tags: ["action", "multiplayer"],
  },
  {
    description:
      "Cookie Clicker is a free-to-play incremental clicker game developed by Orteil.",
    developer: "Orteil",
    id: "cookie-clicker",
    image: "cookie-clicker.png",
    name: "Cookie Clicker",
    platform: "Mobile",
    releaseDate: "?",
    tags: ["casual", "simulation"],
  },
  {
    description:
      "Core Ball is a fun and addictive game where you have to control a ball and avoid the obstacles. The game is simple, but it's hard to master.",
    developer: "randomyang",
    id: "core-ball",
    image: "core-ball.png",
    platform: "Mobile",
    name: "Core Ball",
    tags: ["casual"],
  },
  {
    description:
      "Crazy Taxi is a series of racing video games that was developed by Hitmaker and published by Sega.",
    developer: "Hitmaker",
    emulator: "ruffle",
    id: "./ruffle/crazy-taxi/crazy-taxi.swf",
    image: "crazy-taxi.png",
    name: "Crazy Taxi",
    platform: "PC",
    releaseDate: "?",
    tags: ["racing"],
  },
  {
    description:
      "Cubefield is a simple but addictive game, there are only two controls \u2013 left and right. Use the arrow keys on your keyboard to guide your ship through an endless field of ominous looking coloured cubes \u2013 if you hit one, it\u2019s game over.",
    developer: "Nils Asejevs",
    id: "cubefield",
    image: "cubefield.png",
    platform: "Mobile",
    name: "Cubefield",
    tags: ["strategy"],
  },
  {
    description:
      "Diep.io is a multiplayer action game where players control tanks and earn points by destroying shapes and killing other players in a 2D arena.",
    developer: "Matheus Valadares",
    embedURL: "https://diep.io/",
    id: "diep",
    image: "diep.png",
    platform: "Mobile",
    name: "Diep.io",
    tags: ["action", "casual", "multiplayer"],
  },
  {
    description:
      "Drift Hunters is a fun and addictive game where you have to control a car and drift around the track. The game is simple, but it's hard to master.",
    developer: "Kiz10",
    id: "drift-hunters",
    image: "drift-hunters.png",
    name: "Drift Hunters",
    platform: "PC",
    popular: true,
    tags: ["racing"],
  },
  {
    description:
      "Duck Life is a game series where you train your duck for races and/or battles.",
    developer: "Wix Games",
    emulator: "ruffle",
    id: "./ruffle/ducklife1/ducklife1.swf",
    image: "ducklife1.png",
    name: "Duck Life 1",
    platform: "PC",
    releaseDate: "?",
    tags: ["adventure", "casual", "strategy"],
  },
  {
    description:
      "Duck Life is a game series where you train your duck for races and/or battles.",
    developer: "Wix Games",
    emulator: "ruffle",
    id: "./ruffle/ducklife2/ducklife2.swf",
    image: "ducklife2.png",
    name: "Duck Life 2",
    platform: "PC",
    releaseDate: "?",
    tags: ["adventure", "casual", "strategy"],
  },
  {
    description:
      "Duck Life is a game series where you train your duck for races and/or battles.",
    developer: "Wix Games",
    emulator: "ruffle",
    id: "./ruffle/ducklife3-evolution/ducklife3-evolution.swf",
    image: "ducklife3-evolution.png",
    name: "Duck Life 3 - Evolution",
    platform: "PC",
    releaseDate: "?",
    tags: ["adventure", "casual", "strategy"],
  },
  {
    description:
      "Duck Life is a game series where you train your duck for races and/or battles.",
    developer: "Wix Games",
    emulator: "ruffle",
    id: "./ruffle/ducklife4/ducklife4.swf",
    image: "ducklife4.png",
    name: "Duck Life 4",
    platform: "PC",
    releaseDate: "?",
    popular: true,
    tags: ["adventure", "casual", "strategy"],
  },
  {
    description:
      "Fight to survive in this epic multiplayer battle royale build battle where only the last player standing wins and achieves the long-awaited master victory.",
    developer: "JustPlay.LOL",
    embedURL: "https://1v1.lol/",
    id: "1v1-lol",
    image: "1v1-lol.png",
    platform: "PC",
    name: "1v1.lol",
    tags: ["action", "multiplayer"],
  },
  {
    description:
      "Fireboy and Watergirl: Forest Temple is a fun and addictive game where you have to control two characters at the same time. The game is simple, but it's hard to master.",
    developer: "IceGirl",
    id: "fireboy-and-watergirl-forest-temple",
    image: "fireboy-and-watergirl-forest-temple.png",
    platform: "Mobile",
    name: "Fireboy and Watergirl Forest Temple",
    tags: ["action", "adventure", "casual", "multiplayer"],
  },
  {
    description:
      "Fortnite is a co-op sandbox survival game developed by Epic Games and People Can Fly, with the former publishing it.",
    developer: "Epic Games",
    embedURL:
      "https://play.geforcenow.com/mall/#/deeplink?game-id=46bfab06-d864-465d-9e56-2d9e45cdee0a&utm_source=shortcut",
    id: "fortnite",
    image: "fortnite.png",
    name: "Fortnite",
    platform: "PC",
    error: "GeForce NOW is currently not accessible through the proxy.",
    releaseDate: "2017-07-25",
    tags: ["action", "multiplayer"],
  },
  {
    description:
      "Friday Night Funkin' Vs Ex is a mod of Friday Night Funkin' that adds a new character, Ex Boyfriend, and a new week, Ex Week.",
    developer: "NinjaMuffin99",
    id: "fnf-vs-ex",
    image: "fnf-vs-ex.png",
    platform: "PC",
    name: "Friday Night Funkin: Vs Ex",
    tags: ["indie"],
  },
  {
    description:
      "Frogger is either single-player or two players alternating. The frog starts at the bottom of the screen, which contains a horizontal road occupied by speeding cars, trucks, and bulldozers.",
    developer: "Konami",
    emulator: "ruffle",
    id: "./ruffle/frogger/frogger.swf",
    image: "frogger.png",
    name: "Frogger",
    platform: "PC",
    releaseDate: "?",
    tags: ["casual"],
  },
  {
    description: "GeForce NOW is a cloud gaming service developed by Nvidia.",
    developer: "Nvidia",
    embedURL: "https://play.geforcenow.com/",
    id: "geforce-now",
    image: "geforce-now.png",
    name: "GeForce NOW",
    platform: "PC",
    error: "GeForce NOW is currently not accessible through the proxy.",
    releaseDate: "?",
    tags: [],
  },
  {
    description:
      "In Basket Random game, try to score a basket by using only one key with different variations from each other!",
    developer: "Unknown",
    id: "basket-random",
    image: "basket-random.png",
    platform: "Mobile",
    name: "Basket Random",
    tags: ["action", "multiplayer", "sports"],
  },
  {
    description:
      "JKLM.fun is a fun and fast-paced multiplayer game where you have to press the right keys at the right time to win.",
    developer: "Sparklin Labs",
    embedURL: "https://jklm.fun/",
    id: "jklm",
    image: "jklm.png",
    name: "JKLM.fun",
    platform: "PC",
    releaseDate: "?",
    tags: ["casual", "multiplayer"],
  },
  {
    description: "Let's travel with the cartoon character as high as possible!",
    developer: "Doodle Mobile",
    id: "doodle-jump",
    image: "doodle-jump.png",
    platform: "Mobile",
    name: "Doodle Jump",
    tags: ["adventure", "casual"],
  },
  {
    description:
      "Mope.io is a game in which you play as an animal who eats food and water to survive.",
    developer: "Stan Tatarnykov",
    embedURL: "https://mope.io/",
    id: "mope",
    image: "mope.png",
    platform: "PC",
    name: "Mope.io",
    tags: ["adventure", "casual", "multiplayer"],
  },
  {
    description:
      "Papa's Pizzeria is the first game in the Papa Louie time-management restaurant series, and was officially released on August 7, 2007.",
    developer: "Flipline Studios'",
    emulator: "ruffle",
    id: "./ruffle/papas-pizzeria/papas-pizzeria.swf",
    image: "papas-pizzeria.jpg",
    name: "Papas Pizzeria",
    platform: "PC",
    releaseDate: "2007-08-07",
    tags: ["casual", "simulation", "strategy"],
  },
  {
    description:
      "REPULS is a fast-paced multiplayer FPS game featuring various maps, weapons, and game modes. The pace and style of the game make it perfect for fans of the Halo series.",
    developer: "Docski",
    embedURL: "https://repuls.io/",
    id: "repuls",
    image: "repuls.png",
    platform: "PC",
    name: "Repuls.io",
    tags: ["action", "multiplayer"],
  },
  {
    description:
      "Race at lightning speeds across seven classic zones as Sonic the Hedgehog.",
    developer: "Sega",
    emulator: "emulatorjs",
    id: "./ruffle/sonic-original/sonic-original.swf",
    image: "sonic-original.png",
    platform: "PC",
    name: "Sonic The Hedgehog (Original)",
    tags: ["action", "racing"],
  },
  {
    description:
      "Retro Bowl emulates the gameplay of American football and was heavily influenced by the Tecmo Bowl series.",
    developer: "New Star Games",
    id: "retro-bowl",
    image: "retro-bowl.png",
    name: "Retro Bowl",
    platform: "PC",
    popular: true,
    tags: ["casual", "simulation", "sports", "strategy"],
  },
  {
    description:
      "Ride your bike through the bumpy and challenging tracks. Do not hit the ground and show your skill!",
    developer: "Third Soul",
    id: "bike-mania",
    image: "bike-mania.png",
    platform: "PC",
    name: "Bike Mania",
    tags: ["action", "sports"],
  },
  {
    description:
      "Rooftop Snipers is a chaotic two-button two-player sniper game.",
    developer: "Michael Eichler",
    id: "rooftop-snipers",
    image: "rooftop-snipers.png",
    platform: "PC",
    name: "Rooftop Snipers",
    tags: ["action", "multiplayer"],
  },
  {
    description:
      "Run 3 is the first Run game to introduce a storyline, mainly told through cutscenes.",
    developer: "Joseph Cloutier",
    id: "run-3",
    image: "run-3.png",
    name: "Run 3",
    platform: "PC",
    releaseDate: "2014-06-05",
    tags: ["action", "indie", "racing"],
  },
  {
    description:
      "Slope 2, a new arcade game from Y8 games, engage you in a simple yet deadly challenge: roll down the slope for as long as possible without falling off the edge or hitting any obstacles along the way.",
    developer: "Rob Kay",
    id: "slope-2",
    image: "slope-2.png",
    platform: "PC",
    name: "Slope 2",
    tags: ["action", "casual"],
  },
  {
    description:
      "Slope, a new arcade game from Y8 games, engage you in a simple yet deadly challenge: roll down the slope for as long as possible without falling off the edge or hitting any obstacles along the way.",
    developer: "Rob Kay",
    id: "slope",
    image: "slope.png",
    platform: "PC",
    name: "Slope",
    tags: ["action", "casual"],
  },
  {
    description:
      "Sonic 1 is a platform video game developed by Sonic Team and published by Sega.",
    developer:
      "RubberDuckyCooly, GrubbyPlaya, mattConn, VinMannie, Christian Whitehead, and SEGA",
    id: "sonic-1",
    image: "sonic-1.png",
    platform: "PC",
    name: "Sonic 1",
    tags: ["action", "racing"],
  },
  {
    description:
      "Sonic 2 is a platform video game developed by Sonic Team and published by Sega.",
    developer:
      "RubberDuckyCooly, GrubbyPlaya, mattConn, VinMannie, Christian Whitehead, and SEGA",
    id: "sonic-2",
    image: "sonic-2.png",
    platform: "PC",
    name: "Sonic 2",
    tags: ["action", "racing"],
  },
  {
    description:
      "Subway Surfers is an endless runner mobile game co-developed by Kiloo, a private company based in Denmark and SYBO Games.",
    developer: "Kiloo",
    id: "subway-surfers",
    image: "subway-surfers.png",
    platform: "Mobile",
    name: "Subway Surfers",
    tags: ["action", "racing"],
  },
  {
    description:
      "Team Fortress 2 is a 2007 multiplayer first-person shooter game developed and published by Valve Corporation.",
    developer: "Valve",
    embedURL:
      "https://play.geforcenow.com/mall/#/deeplink?game-id=40512534-ad27-4a12-afa7-6fc412288072&utm_source=shortcut",
    id: "tf2",
    image: "tf2.png",
    platform: "PC",
    error: "GeForce NOW is currently not accessible through the proxy.",
    name: "Team Fortress 2",
    tags: ["action", "multiplayer"],
  },
  {
    description:
      "Tetris, video game created by Russian designer Alexey Pajitnov in 1985 that allows players to rotate falling blocks strategically to clear levels.",
    developer: "Larprad",
    id: "tetris",
    image: "tetris.png",
    platform: "PC",
    name: "Tetris",
    tags: ["casual", "strategy"],
  },
  {
    description:
      "The Achromats have taken the worlds color offline! Raid their colorless lair and vanquish them all, restoring the world to it's technicolor glory.",
    developer: "Ryan Malm",
    id: "chroma",
    image: "chroma.png",
    platform: "PC",
    name: "The Chroma Incident",
    tags: ["adventure", "indie"],
  },
  {
    description:
      "The Dough-Nutter 4000 has malfunctioned! It's up to you, Donut Boy, to rescue the employees and donuts that were scattered around town from the resulting explosion.",
    developer: "Dahoh Bolesta",
    id: "donut-boy",
    image: "donut-boy.png",
    platform: "PC",
    name: "Donut Boy",
    tags: ["adventure", "indie"],
  },
  {
    description:
      "The goal of the game is to stack the moving blocks over each other as high as you can.",
    developer: "meshde",
    id: "stack",
    image: "stack.png",
    platform: "Mobile",
    name: "Stack",
    tags: ["casual"],
  },
  {
    description:
      "Wings.io is a Massive multiplayer online game. Control your plane and shoot down other players!",
    developer: "Profusion Studios",
    embedURL: "https://wings.io/",
    id: "wings",
    image: "wings.png",
    platform: "PC",
    name: "Wings.io",
    tags: ["action", "multiplayer"],
  },
  {
    description:
      "Your goal is become the biggest and longest snake in the world.If your head touches another player, you will explode and then it's game over. But if others run into YOU, then THEY will explode, and you can eat their remains!",
    developer: "Sang Mobile",
    embedURL: "https://supersnake.io",
    id: "supersnake",
    image: "supersnake.png",
    platform: "PC",
    name: "SuperSnake.io",
    tags: ["action", "multiplayer"],
  },
  {
    name: "Sparebeat",
    id: "sparebeat",
    image: "sparebeat.png",
    developer: "suzukibakery",
    description: "A fun 4K rhythm game desinged to be played in browsers",
    platform: "PC",
    embedURL: "https://sparebeat.com/",
    tags: ["indie", "strategy"],
  },
  {
    name: "Portal",
    id: "portal",
    image: "portal.jpg",
    developer: "Valve",
    platform: "PC",
    description:
      "Portal is a new single player game from Valve. Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.",
    embedURL:
      "https://play.geforcenow.com/mall/#/deeplink?game-id=df05c1d5-60a1-4969-a73a-2fef74a8dde8&utm_source=shortcut",
    error: "GeForce NOW is currently not accessible through the proxy.",
    tags: ["adventure", "strategy"],
  },
  {
    name: "Portal 2",
    id: "portal-2",
    image: "portal-2.jpg",
    developer: "Valve",
    platform: "PC",
    description:
      "Portal 2 is a new single player and multiplayer game from Valve. Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.",
    error: "GeForce NOW is currently not accessible through the proxy.",
    embedURL:
      "https://play.geforcenow.com/mall/#/deeplink?game-id=749ab5aa-eded-4616-965e-fae5f9b6c7f1&utm_source=shortcut",
    tags: ["adventure", "multiplayer", "strategy"],
  },
  {
    name: "Tube Jumpers",
    id: "tube-jumpers",
    image: "tube-jumpers.png",
    developer: "Dahoh Bolesta",
    platform: "PC",
    description:
      "Tube Jumpers is a local multiplayer that can be played with up to 4 people. In the game you have to make sure to stay on your floating tube.",
    tags: ["action", "multiplayer"],
  },
  {
    name: "Jetpack Joyride",
    id: "jetpack-joyride",
    image: "jetpack-joyride.png",
    developer: "Halfbrick Studios",
    platform: "Mobile",
    description:
      "Jetpack Joyride is a 2011 side-scrolling endless runner action video game developed by Halfbrick Studios and published by Halfbrick Studios.",
    tags: ["action"],
  },
  {
    name: "World's Hardest Game",
    id: "worlds-hardest-game",
    image: "worlds-hardest-game.png",
    developer: "Stephen Critoph",
    platform: "PC",
    description:
      "The World's Hardest Game is an addictive puzzle game consisting of 30 incredibly challenging levels.",
    tags: ["indie", "strategy"],
  },
  {
    name: "Temple Run 2",
    id: "temple-run-2",
    image: "temple-run-2.png",
    developer: "Imangi Studios",
    platform: "Mobile",
    description:
      "Temple Run 2 is an endless running video game developed and published by Imangi Studios.",
    tags: ["action"],
  },
  {
    name: "Fruit Ninja",
    id: "fruit-ninja",
    image: "fruit-ninja.png",
    developer: "Halfbrick Studios",
    platform: "Mobile",
    description:
      "In Fruit Ninja the player must slice fruit that is thrown into the air by swiping the device's touch screen with their finger or the player's arms and hands, and must not slice bombs.",
    tags: ["casual"],
  },
  {
    name: "BitLife",
    id: "bitlife",
    image: "bitlife.png",
    developer: "CandyWriter",
    description: "BitLife, is a mobile life simulator game.",
    platform: "Mobile",
    popular: true,
    tags: ["rpg", "simulation"],
  },
  {
    name: "Crossy Road",
    id: "crossy-road",
    image: "crossy-road.png",
    developer: "Hipster Whale",
    platform: "Mobile",
    description:
      "Crossy Road is the 8-bit endless arcade hopper that started it all. Collect custom characters and navigate freeways, railroads, rivers and much more.",
    tags: ["adventure", "casual"],
  },
  {
    name: "Giant Hamster Run",
    id: "giant-hamster-run",
    image: "giant-hamster-run.png",
    developer: "FLGames",
    platform: "Mobile",
    description:
      "Tiny the Hamster as he stampedes through the city is this classic endless-runner.",
    tags: ["action", "adventure", "casual"],
  },
  {
    name: "Impossible Quiz",
    id: "./ruffle/impossible-quiz/impossible-quiz.swf",
    image: "impossible-quiz.png",
    developer: "Glenn Rhodes",
    description:
      "The Impossible Quiz is an online trivia quiz that features only very hard questions.",
    platform: "PC",
    emulator: "ruffle",
    tags: ["indie", "strategy"],
  },
  {
    name: "Dadish",
    id: "dadish",
    image: "dadish.png",
    developer: "Thomas K Young and CatCup Games",
    platform: "Mobile",
    description:
      "Dadish is a platform game where you're a radish daddy who's in charge of finding his kids who have gone missing from the vegetable patch.",
    tags: ["action", "adventure", "indie"],
  },
  {
    name: "Tiny Fishing",
    id: "tiny-fishing",
    image: "tiny-fishing.png",
    developer: "appdz and Mad Buffer",
    description:
      "Catch fish and sell them for money to buy upgrades and new fishing rods!",
    tags: ["casual", "simulation"],
  },
  {
    name: "Geometry Dash (Scratch)",
    id: "geometry-dash",
    image: "geometry-dash.png",
    developer: "Robert Topala and RobTop Games",
    platform: "Mobile",
    description:
      "Geometry Dash is a rhythm-based platform game developed and published by RobTop Games.",
    tags: ["action"],
  },
  {
    name: "Dadish 2",
    id: "dadish-2",
    image: "dadish-2.png",
    developer: "Thomas K Young and CatCup Games",
    platform: "Mobile",
    description:
      "Help reunite Dadish with his missing kids in this charming and challenging platforming adventure.",
    tags: ["action", "adventure", "indie"],
  },
  {
    name: "People Playground",
    id: "people-playground",
    image: "people-playground.png",
    developer: "Studio Minus",
    description:
      "Shoot, stab, burn, poison, tear, vaporise, or crush ragdolls. This game is for people who enjoy throwing around ragdolls.",
    platform: "PC",
    error: "GeForce NOW is currently not accessible through the proxy.",
    embedURL:
      "https://play.geforcenow.com/mall/#/deeplink?game-id=17f2bd78-5423-4946-afc4-08f92380ef97&utm_source=shortcut",
    tags: ["action", "indie", "simulation"],
  },
  {
    name: "Krew.io",
    id: "krew",
    image: "krew.jpg",
    developer: "m0de",
    description:
      "A fast paced pirate game where you compete against other players for treasure.",
    platform: "PC",
    embedURL: "https://krew.io",
    tags: ["action", "adventure", "multiplayer"],
  },
  {
    name: "Bloxorz",
    id: "bloxorz",
    image: "bloxorz.png",
    developer: "Damien Clarke and CoolMathGames.com",
    platform: "PC",
    description:
      "Bloxorz is a puzzle game, very challenging. It is a great block awesome game that gets harder at each progressive level.",
    tags: ["casual", "strategy"],
  },
  {
    name: "Cat Ninja the Quest for the Magical Energy Crystals",
    id: "cat-ninja",
    image: "cat-ninja.png",
    developer: "Richman Stewart",
    platform: "PC",
    description:
      "Cat Ninja is one of the best new platform-adventure games online.",
    tags: ["action", "indie"],
  },
  {
    name: "Kirka.io",
    id: "kirka",
    image: "kirka.png",
    developer: "AwesomeSam",
    description:
      "Kirka.io is a multiplayer online slow-paced competitive FPS game on the browser.",
    platform: "PC",
    embedURL: "https://kirka.io/",
    tags: ["action", "multiplayer"],
  },
  {
    name: "Kopanito All-Stars Soccer",
    id: "kopanito-all-stars-soccer",
    image: "kopanito-all-stars-soccer.png",
    developer: "Merixgames",
    platform: "PC",
    description:
      "Fast-paced football game without a referee on the pitch and with crazy super-powers!",
    tags: ["sports"],
  },
  {
    name: "Riddle School",
    id: "./ruffle/riddle-school/riddle-school.swf",
    image: "riddle-school.png",
    developer: "Jonochrome",
    description: "Riddle School is a 2006 flash based puzzle-solving game.",
    platform: "PC",
    emulator: "ruffle",
    tags: ["adventure", "casual", "indie", "strategy"],
  },
  {
    name: "Riddle School 2",
    id: "./ruffle/riddle-school-2/riddle-school-2.swf",
    image: "riddle-school-2.png",
    developer: "Jonochrome",
    description:
      "Riddle School 2 is a Flash-based point-and-click puzzle game by Jonochrome.",
    platform: "PC",
    emulator: "ruffle",
    tags: ["adventure", "casual", "indie", "strategy"],
  },
  {
    name: "Riddle School 3",
    id: "./ruffle/riddle-school-3/riddle-school-3.swf",
    image: "riddle-school-3.png",
    developer: "Jonochrome",
    description:
      "Riddle School 3 is a Flash-based point-and-click puzzle game by Jonochrome.",
    platform: "PC",
    emulator: "ruffle",
    tags: ["adventure", "casual", "indie", "strategy"],
  },
  {
    name: "Riddle School 4",
    id: "./ruffle/riddle-school-4/riddle-school-4.swf",
    image: "riddle-school-4.png",
    developer: "Jonochrome",
    description:
      "Riddle School 4 is a Flash-based point-and-click puzzle game by Jonochrome.",
    platform: "PC",
    emulator: "ruffle",
    tags: ["adventure", "casual", "indie", "strategy"],
  },
  {
    name: "Riddle School 5",
    id: "./ruffle/riddle-school-5/riddle-school-5.swf",
    image: "riddle-school-5.png",
    developer: "Jonochrome",
    description:
      "Riddle School 5 is a Flash-based point-and-click puzzle game by Jonochrome.",
    platform: "PC",
    emulator: "ruffle",
    tags: ["adventure", "casual", "indie", "strategy"],
  },
  {
    name: "A Dance of Fire and Ice",
    id: "a-dance-of-fire-and-ice",
    image: "a-dance-of-fire-and-ice.png",
    developer: "fizzd, Kyle, giacomopc",
    platform: "Mobile",
    description: "A Dance of Fire and Ice is a simple one-button rhythm game.",
    tags: ["strategy"],
  },
  {
    name: "OvO",
    id: "ovo",
    image: "ovo.png",
    developer: "Dedra Games",
    platform: "Mobile",
    description:
      "OvO is a 2D platformer game where the objective is to go through levels and complete them.",
    tags: ["casual"],
  },
  {
    name: "Gun Mayhem 2",
    id: "./ruffle/gun-mayhem-2/gun-mayhem-2.swf",
    image: "gun-mayhem-2.png",
    developer: "Kevin Gu",
    description:
      "Defeat your powerful enemies by shooting them or blasting them off the platform with dynamite.",
    platform: "PC",
    emulator: "ruffle",
    tags: ["action"],
  },
  {
    name: "FeedVid Live",
    id: "feedvid-live",
    image: "feedvid-live.png",
    developer: "Varun R.",
    platform: "Mobile",
    description:
      "FeedVid Live is a short puzzle game taking place in an unusual livestreaming app.",
    tags: ["adventure", "indie", "strategy"],
  },
  {
    name: "Universal Paperclips",
    id: "universal-paperclips",
    image: "universal-paperclips.png",
    developer: "Frank Lantz",
    platform: "Mobile",
    description:
      "An idle game where you produce paperclips while trying to deal with public demand",
    tags: ["casual", "indie"],
  },
  {
    name: "Chrome Dino",
    id: "dinogame",
    image: "dinogame.png",
    developer: "Google",
    platform: "Mobile",
    description:
      "The Chrome Dino game is a simple, browser-based game that can be played when a user's internet connection is offline",
    tags: ["casual"],
  },
  {
    name: "Wordle",
    id: "wordle",
    image: "wordle.png",
    developer: "Josh Wardle and DharMesh",
    platform: "Mobile",
    description:
      "Wordle is a type of word puzzle in which a user is presented with a jumble of letters, and they must rearrange them to form words.",
    tags: ["casual", "strategy"],
  },
  {
    name: "XX142-B2.EXE",
    id: "xx142-b2exe",
    image: "xx142-b2exe.png",
    developer: "Ben Clark and Salvatore Previti",
    platform: "Mobile",
    description:
      "You are an AI weaponized virus built to infiltrate the alien network and deactivate all power generators and weapon systems.",
    tags: ["indie", "strategy"],
  },
  {
    name: "PACKABUNCHAS",
    id: "packabunchas",
    image: "packabunchas.png",
    developer: "Mattia Fortunati",
    platform: "Mobile",
    description:
      "In this game, you try to fix tetris like shapes, into a rocket ship.",
    tags: ["indie", "strategy"],
  },
  {
    name: "Pizza Tower",
    id: "pizza-tower",
    image: "pizza-tower.jpeg",
    developer: "Tour De Pizza",
    platform: "PC",
    description:
      "Pizza Tower is a fast paced 2D platformer inspired by the Wario Land series, with an emphasis on movement, exploration and score attack. Featuring highly stylized pixel art inspired by the cartoons from the '90s, and a highly energetic soundtrack.",
    tags: ["action", "adventure", "indie"],
  },
  {
    name: "Drift Boss",
    developer: "White Label Games",
    id: "drift-boss",
    image: "drift-boss.png",
    platform: "Mobile",
    description:
      "Drift boss is a drifting game played by pressing one button. Drive your vehicle around tricky corners and over bumps until you fall off the platform. Keep playing to earn rewards and unlock better cars!",
    tags: ["action", "racing"],
  },
  {
    name: "Typing Test",
    id: "typing-test",
    image: "typing-test.png",
    developer: "salmannotkhan",
    platform: "PC",
    description:
      "Type as fast as you possibly can! Test yourself and see how much you can improve.",
    tags: ["casual"],
  },
  {
    name: "Bonk.io",
    id: "bonk",
    image: "bonk.png",
    developer: "Chaz",
    description:
      "Bonk.io is a multiplayer physics game, for up to eight players at once. Push your opponents off the edge of the level, the last man standing wins!",
    platform: "PC",
    embedURL: "https://bonk.io",
    tags: ["action", "multiplayer"],
  },
  {
    name: "Chess.com",
    id: "chess",
    image: "chess.png",
    developer: "Chess.com",
    description:
      "Chess.com is an internet chess server, news website and social networking website.",
    platform: "Mobile",
    embedURL: "https://chess.com",
    tags: ["casual", "multiplayer", "strategy"],
  },
  {
    name: "Swing Monkey",
    id: "swing-monkey",
    image: "swing-monkey.png",
    developer: "MarketJS",
    description:
      "Swing Monkey is a one-button monkey swinging game to reach the finish line successfully.",
    platform: "Mobile",
    tags: ["casual"],
  },
  {
    name: "Conway's Game Of Life",
    id: "gameoflife",
    image: "gameoflife.png",
    developer: "John Horton Conway, pmav (Github repo)",
    description: "A infinitly long 2D sandbox game.",
    platform: "PC",
    tags: ["casual", "indie", "simulation"],
  },
  {
    name: "Vex 3",
    id: "vex-3",
    image: "vex-3.png",
    developer: "Amazing Adam",
    description:
      "Vex 3 is the third platform game in the Vex series. The game is full of twists and turns, with a labyrinth of deadly devices and traps to navigate on each level. Avoid the spinning blades, spikes, and traps to make your way to the next act!",
    platform: "PC",
    tags: ["action", "strategy"],
  },
  {
    name: "Vex 4",
    id: "vex-4",
    image: "vex-4.png",
    developer: "Amazing Adam",
    description:
      "Vex 4 is an amazing stick platformer in which you climb, jump, swim, and fly your way through 9 challenging acts. It is the sequel of Vex 3, a massive hit, and will be equally fun and challenging for players of all ages.",
    platform: "PC",
    tags: ["action", "strategy"],
  },
  {
    name: "Vex 5",
    id: "vex-5",
    image: "vex-5.png",
    developer: "Amazing Adam",
    description:
      "Vex 5 is the fifth platform game in the Vex series. Each level is a labyrinth of deadly devices and traps. You have to outsmart these obstacles to reach the end. Expect some of the toughest challenges yet in this fifth installment.",
    platform: "PC",
    tags: ["action", "strategy"],
  },
  {
    name: "Five Nights at Freddy's",
    id: "fnaf",
    image: "fnaf.png",
    developer: "Wendell Sousa",
    description:
      "A web version I've made of the popular horror game Five Nights at Freddy's.",
    platform: "PC",
    tags: ["action", "adventure", "strategy"],
  },
  {
    name: "There Is No Game",
    id: "there-is-no-game",
    image: "there-is-no-game.png",
    developer: "Kamizoto",
    description:
      "There is No Game is a 10-15 minute title that won the deception category in the 2015 Newgrounds Construct Jam.",
    platform: "PC",
    tags: ["casual", "indie", "strategy"],
  },
  {
    name: "Ball Dodge",
    id: "ball-dodge",
    image: "ball-dodge.png",
    developer: "Silvereen Games - Moonlight (silvereen.net)",
    description:
      "Try or die to dodge all the floating red balls for some reason.",
    platform: "PC",
    tags: ["simulation", "indie"],
  },
  {
    name: "Moto X3M",
    id: "moto-x3m",
    image: "moto-x3m.png",
    developer: "MadPuffers and AceViral",
    description:
      "Moto X3M is an awesome bike game with 22 challenging levels. Choose a bike, put your helmet on, pass obstacles and get ready to beat the time on tons of off-road circuits. Have fun with Moto X3M!",
    platform: "Mobile",
    tags: ["action", "racing"],
  },
];

export function AllGamesComponent() {
  return (
    <div className="min-h-screen bg-[#2C1A0E] text-amber-100">
      <header className="flex items-center justify-between p-4 bg-[#1E120A]">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-green-300">PLAY</span>
          <span className="text-amber-100">VE</span>
          <span className="text-amber-100">RA</span>
          <span className="text-green-300">.CO</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              className="pl-8 pr-4 py-2 bg-[#3A2314] rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Search games"
              type="search"
            />
            <Search
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-amber-400"
              size={20}
            />
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="text-amber-100 hover:text-green-300"
          >
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </header>
      <main className="p-4">
        <h1 className="text-3xl font-bold mb-6">All Games</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allGames.map((game, index) => {
            const source = game.id.includes("ruffle")
              ? game.id
              : `./static/${game.id}/index.html`;

            const gameType = source.includes("ruffle") ? "flash" : "html";

            return (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={"./img/" + game.image}
                  alt={game.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h3 className="text-sm font-medium text-center truncate w-full">
                  {game.name}
                </h3>
                <a
                  href={`./player?title=${game.name}&source=${source}&description=${game.description}&img=./img/${game.image}&type=${gameType}`}
                >
                  <Button
                    variant="link"
                    className="text-green-300 hover:text-green-200 mt-1"
                  >
                    Play Now
                  </Button>
                </a>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="bg-[#1E120A] text-amber-100 py-8">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-6 mb-4">
            <Link
              href="https://discord.gg/nova-949081080571494450"
              className="hover:text-green-300 transition-colors"
            >
              Discord
            </Link>
            <Link
              href="/about"
              className="hover:text-green-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-green-300 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/tos"
              className="hover:text-green-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:text-green-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/dmca"
              className="hover:text-green-300 transition-colors"
            >
              DMCA
            </Link>
          </nav>
          <p className="text-center text-sm text-amber-200">
            © {new Date().getFullYear()} PLAYVERA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}