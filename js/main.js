define([
    'jquery',
    'underscore',
    'backbone',
    'generator',
    'app.config'
], function ($, _, Backbone, Generator, AppConfig) {

    $(document).ready(function() {

        /**
         * TODO: circle
         */

        var SchulteCellModel = Backbone.Model.extend({
            initialize: function(value) {
                this.set('value', value);
            }
        });

        var SchulteCellCollection = Backbone.Collection.extend({
            model: SchulteCellModel
        });

        var SchulteCellView = Backbone.View.extend({
            tagName: 'td',
            className: AppConfig.selector.cellDefaultClassName,

            initialize: function() {
                _.bindAll(this, 'reset');
                this.model.on('change:value', this.reset);
            },

            render: function() {
                return this.$el.html(this.model.get('value'));
            },

            reset: function() {
                this.$el[0].className = AppConfig.selector.cellDefaultClassName;
                this.render();
            }
        });

        var SchulteTableModel = Backbone.Model.extend({
            defaults: {
                current : 1
            },
            reset: function() {
                this.set('current', 1);

                var generator = Generator(this.get('size'));

                this.get('collection').forEach(function(model) {
                    model.set('value', generator());
                });
            }
        });

        var SchulteTableView =  Backbone.View.extend({
            el: "#js-schulte",

            render: function() {
                this.$el.html(this.getFilledTable(this.model.get('size')));
            },

            getFilledTable: function(size) {
                var $table = $('<table>');

                var event = this.getChooseEvent();

                var generator = Generator(size);

                var collection = this.model.get('collection');

                for (var y = 1; y <= size; y++) {
                    var $tr = $('<tr>');

                    for (var x = 1; x <= size; x++) {
                        var model = new SchulteCellModel(generator());

                        collection.add(model);

                        var cell = new SchulteCellView({
                            model: model
                        });

                        $tr.append(cell.render().click(event));
                    }

                    $table.append($tr);
                }

                return $table;
            },

            getChooseEvent: function() {
                var model = this.model;

                return function() {
                    var $self = $(this);

                    var currentChoose =  model.get('current');
                    if ($self.html() == currentChoose) {
                        model.set('current', currentChoose + 1);

                        $self.addClass(AppConfig.selector.cellChooseClassName);
                    }
                };
            }
        });

        var schulteTableModel = new SchulteTableModel({
            size: AppConfig.size,
            collection: new SchulteCellCollection()
        });

        var schulteTableView = new SchulteTableView({
            model: schulteTableModel
        });

        schulteTableView.render();

        function showTriesCount() {
            var tries = 0;
            var length = AppConfig.size * AppConfig.size;

            (function doTry() {
                if ($('.' + AppConfig.selector.cellChooseClassName).length < length) {
                    $('.' + AppConfig.selector.cellDefaultClassName).click();
                    ++tries;
                    setTimeout(doTry, 500);
                } else {
                    console.log(tries);
                }
            })();
        }

        setInterval(function() {
            schulteTableModel.reset();
            showTriesCount();
        }, 45 * 100);
    });
});