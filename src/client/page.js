UI.body.onRendered(function () {
    document.addEventListener('click', function(e) {
        var point = {x: e.layerX, y: e.layerY};
        Meteor.call('addIZHeatmapClick', point);
    });

    document.addEventListener('mousemove', function(e) {
        var point = {x: e.layerX, y: e.layerY};
        Meteor.call('addIZHeatmapMousemove', point);
    });


    var instance = Template.instance();
    instance.heatmap = h337.create({
        container: document.querySelector('body'),
        radius: 60
    });

    Meteor.call('loadIZHeatmapData', {event: 'mousemove'}, function(err, result) {
        if(err) throw err;
        instance.heatmap.setData(result);
    });
});

//Template.body.onRendered(function() {
//        var doc = $(document);
//
//        var instance = Template.instance();
//        instance.heatmap = h337.create({
//            container: document.querySelector('.heatmap'),
//            radius: 60
//        });
//
//
//        // heatmap data format
//        Tracker.autorun(function() {
//            var isReady = heatmapSub.ready();
//            if(isReady) {
//                var max = maxValue.get();
//                var p = points.fetch();
//                var data = {
//                    max: max,
//                    data: p
//                };
//
//            }
//        });
//});