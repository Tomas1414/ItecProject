var visWidth = 1000;
var visHeight = 1000;

// Assign the specification to a local variable vlSpec.
var vlSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "width": visWidth,
    "height": visHeight,

    "data": {"url":"COVID-19_Community_Outbreaks_in_Ottawa.json"},

    "title": "Covid Cases in Ottawa",

    "mark": {
      "type": "bar",
    },

    "transform": [
      {
        "calculate": "'LineCharts/Workplace - Construction.html'",
        "as": "url"
      }
    ],

    "selection": {select: {"type": "single"}},
    "encoding": {
      "x": {"field":"Setting", "type":"nominal", "title":"Setting"},
      "y": {"field":"Total_Cases", "type":"quantitative"},

      "tooltip": [
        {"field": "Setting", "type": "nominal"},
        {"field": "Total_Deaths", "type": "quantitative"},
      ],
    },
} // End of vlSpec

// Embed the visualization in the container with id `barsvl`
vegaEmbed('#BarChart', vlSpec);
