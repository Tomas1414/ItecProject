var visWidth = 1100;
var visHeight = 1100;

// Assign the specification to a local variable vlSpec.
var vlSpec2 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
    "width": visWidth,
    "height": visHeight,

    "data": {"url":"COVID-19_Community_Outbreaks_in_Ottawa.json"},
    "transform": [{"filter": "datum.Setting==='Workplace - Health'"}],
    "title": "Timeline: Workplace (Health) in 2021",
    "mark": {
      "type": "line",
    },

    "encoding": {
      "x": {"field":"Start_Date", "type":"temporal", "title":"Date"},
      "y": {"field":"Total_Cases", "type":"quantitative", "scale": {"domain": [0, 35]}, "title":"NumOfCases"},

    //  "tooltip": [
    //    {"field": "Setting", "type": "nominal"},
    //    {"field": "Total_Deaths", "type": "quantitative"},
    //  ],
    },
} // End of vlSpec

// Embed the visualization in the container with id `barsvl`
vegaEmbed('#workplace_health', vlSpec2);
