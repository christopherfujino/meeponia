/* eslint sort-keys: "off" */

export default () => ( // eventually accept state
  {
    "name": "root",
    "children": [
      {
        "name": "Intro",
        "description": "Once upon a time...",
        "bodyText": [
          "Since its discovery 10 years ago, star system 55-MP has captured the minds and hearts of the people of earth with its 3rd planet, an apparent doppelganger of our own.",
          "The discovery united the disparate governments of earth in a singular mission: save the human race from extinction by establishing an extra-terrestrial colony! After a rigorous screening process, you have been selected to be part of the first manned-space mission to 55-MP. Your objective is to spend 3 week, exploring the feasability of a long-term colony.",
          "However, upon waking from cryosleep, you find your ship has crash landed on 55-MP's 3rd planet, and the rest of your crew dead. It is now up to you to use whatever resouces remain at your disposal to survive and perhaps even create a new life on this strange, new planet.",
          "This is Meeponia..."
        ],
        "children": [
          {
            "name": "A fork in the road",
            "description": "You must choose your path",
            "children": [
              {
                "name": "Rock",
                "description": "Very hard.",
                "children": []
              },
              {
                "name": "Paper",
                "description": "Very flat.",
                "children": []
              },
              {
                "name": "Scissors",
                "description": "Very sharp.",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
);
