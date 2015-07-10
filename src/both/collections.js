if( Meteor.isServer ) {
    IZ_Heatmap.Collections = {};
    IZ_Heatmap.Schemas = {};

    var heatmap_name = "iz_heatmap_points";
    IZ_Heatmap.Collections.HeatmapPoints = new Mongo.Collection(heatmap_name);

    IZ_Heatmap.Schemas.Click = function() {
        return {
            x: null,
            y: null,
            value: 1,
            event: "click",
            url: "",
            page: "",
            region: "",
            createdAt: new Date()
        };
    }
    IZ_Heatmap.Schemas.Mousemove = function() {
        return {
            x: null,
            y: null,
            value: 1,
            event: "mousemove",
            url: "",
            page: "",
            region: "",
            createdAt: new Date()
        };
    }
}