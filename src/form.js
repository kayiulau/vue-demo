var fields = [{name: "name", label: "姓名", type: "string", component: "text"},
    {name: "age", label: "年龄", type: "number", component: "select"}]

//var html = "<input ng-model='" +  fields[0].name + "' type='"
Vue.component('my-form', {
    template: '<div :is="formDef"></div>',
    mounted: function () {
        var html = '';
        for (var i = 0; i < this.fields.length; i++) {
            html += this.fields[i].name;
        }
        this.formDef.template = html;
    },
    data: {
        formDef: {}
    },
    props: [
        'fields'
    ]
});
