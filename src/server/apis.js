Meteor.methods({
    /**
     * Log click event
     * @param point {Object}
     * @returns {Boolean}
     */
    addIZHeatmapClick: function (point) {
        check(point, {
            x: Number,
            y: Number
        });
        var p = _.extend(new IZ_Heatmap.Schemas.Click(), point);
        return IZ_Heatmap.Collections.HeatmapPoints.insert(p);
    },

    /**
     * Log mousemove event
     * @param point {Object}
     * @returns {Boolean}
     */
    addIZHeatmapMousemove: function (point) {
        check(point, {
            x: Number,
            y: Number
        });
        var p = _.extend(new IZ_Heatmap.Schemas.Mousemove(), point);
        return IZ_Heatmap.Collections.HeatmapPoints.insert(p);
    },

    loadIZHeatmapData: function(options) {
        var data = {
            max: 1,
            data: []
        };
        if(options && options.event) {
            data.data = IZ_Heatmap.Collections.HeatmapPoints.find({event: options.event}).fetch();
        }
        return data;
    }
});