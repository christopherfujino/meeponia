export default function tech (state) {
  return {
    "name": "root",
    "children": [
      {
        "name": "A",
        "children": []
      },
      {
        "name": "B",
        "children": [
          {
            "name": "C",
            "children": [
              {
                "name": "D",
                "children": []
              }
            ]
          },
          {
            "name": "E",
            "children": [
              {
                "name": "F",
                "children": []
              },
              {
                "name": "G",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  };
};
