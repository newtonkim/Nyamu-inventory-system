import { unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, createBlock, openBlock, Fragment, renderList, toDisplayString, vModelSelect, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-C2gookwo.js";
import { useForm, Head } from "@inertiajs/vue3";
import { P as PrimaryButton } from "./PrimaryButton-CZbnR4E4.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./TextInput-Bq3bXff-.js";
import "./ApplicationLogo-DxaUfI_m.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    product: Object,
    categories: Array
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      _method: "PUT",
      name: props.product.name,
      sku: props.product.sku,
      description: props.product.description,
      category_id: props.product.category_id,
      cost_price: props.product.cost_price,
      selling_price: props.product.selling_price,
      stock_quantity: props.product.stock_quantity,
      minimum_stock: props.product.minimum_stock,
      unit: props.product.unit,
      barcode: props.product.barcode,
      image: null,
      is_active: props.product.is_active
    });
    const submit = () => {
      form.post(route("products.update", props.product.id));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit Product" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800"${_scopeId}>Edit Product</h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800" }, "Edit Product")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              type: "text",
              class: "block w-full mt-1",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "barcode",
              value: "Barcode"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "barcode",
              type: "text",
              class: "block w-full mt-1",
              modelValue: unref(form).barcode,
              "onUpdate:modelValue": ($event) => unref(form).barcode = $event
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.barcode
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "sku",
              value: "SKU"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "sku",
              type: "text",
              class: "block w-full mt-1 bg-gray-100",
              modelValue: unref(form).sku,
              "onUpdate:modelValue": ($event) => unref(form).sku = $event,
              required: "",
              readonly: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.sku
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "description",
              value: "Description"
            }, null, _parent2, _scopeId));
            _push2(`<textarea id="description" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.description
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 gap-4 md:grid-cols-2"${_scopeId}><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "cost_price",
              value: "Cost Price"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "cost_price",
              type: "number",
              step: "any",
              class: "block w-full mt-1",
              modelValue: unref(form).cost_price,
              "onUpdate:modelValue": ($event) => unref(form).cost_price = $event,
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.cost_price
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "selling_price",
              value: "Selling Price"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "selling_price",
              type: "number",
              step: "any",
              class: "block w-full mt-1",
              modelValue: unref(form).selling_price,
              "onUpdate:modelValue": ($event) => unref(form).selling_price = $event,
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.selling_price
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 gap-4 md:grid-cols-2"${_scopeId}><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "stock_quantity",
              value: "Stock Quantity"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "stock_quantity",
              type: "number",
              class: "block w-full mt-1",
              modelValue: unref(form).stock_quantity,
              "onUpdate:modelValue": ($event) => unref(form).stock_quantity = $event,
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.stock_quantity
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "minimum_stock",
              value: "Minimum Stock"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "minimum_stock",
              type: "number",
              class: "block w-full mt-1",
              modelValue: unref(form).minimum_stock,
              "onUpdate:modelValue": ($event) => unref(form).minimum_stock = $event,
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.minimum_stock
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 gap-4 md:grid-cols-2"${_scopeId}><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "unit",
              value: "Unit"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "unit",
              type: "text",
              class: "block w-full mt-1",
              modelValue: unref(form).unit,
              "onUpdate:modelValue": ($event) => unref(form).unit = $event,
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.unit
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "category_id",
              value: "Category"
            }, null, _parent2, _scopeId));
            _push2(`<select id="category_id" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, "") : ssrLooseEqual(unref(form).category_id, "")) ? " selected" : ""}${_scopeId}>Select a category</option><!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).category_id) ? ssrLooseContain(unref(form).category_id, category.id) : ssrLooseEqual(unref(form).category_id, category.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(category.name)}</option>`);
            });
            _push2(`<!--]--></select>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.category_id
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "image",
              value: "Image"
            }, null, _parent2, _scopeId));
            _push2(`<input id="image" type="file" class="block w-full mt-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: unref(form).errors.image
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center mt-4"${_scopeId}><input id="is_active" type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""}${_scopeId}><label for="is_active" class="block ml-2 text-sm text-gray-900"${_scopeId}>Is Active</label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Update `);
                } else {
                  return [
                    createTextVNode(" Update ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"])
                      }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$2, {
                            for: "name",
                            value: "Name"
                          }),
                          createVNode(_sfc_main$3, {
                            id: "name",
                            type: "text",
                            class: "block w-full mt-1",
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            required: "",
                            autofocus: "",
                            autocomplete: "name"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.name
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode(_sfc_main$2, {
                            for: "barcode",
                            value: "Barcode"
                          }),
                          createVNode(_sfc_main$3, {
                            id: "barcode",
                            type: "text",
                            class: "block w-full mt-1",
                            modelValue: unref(form).barcode,
                            "onUpdate:modelValue": ($event) => unref(form).barcode = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.barcode
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode(_sfc_main$2, {
                            for: "sku",
                            value: "SKU"
                          }),
                          createVNode(_sfc_main$3, {
                            id: "sku",
                            type: "text",
                            class: "block w-full mt-1 bg-gray-100",
                            modelValue: unref(form).sku,
                            "onUpdate:modelValue": ($event) => unref(form).sku = $event,
                            required: "",
                            readonly: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.sku
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode(_sfc_main$2, {
                            for: "description",
                            value: "Description"
                          }),
                          withDirectives(createVNode("textarea", {
                            id: "description",
                            class: "block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                            "onUpdate:modelValue": ($event) => unref(form).description = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).description]
                          ]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.description
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, [
                          createVNode("div", { class: "mt-4" }, [
                            createVNode(_sfc_main$2, {
                              for: "cost_price",
                              value: "Cost Price"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "cost_price",
                              type: "number",
                              step: "any",
                              class: "block w-full mt-1",
                              modelValue: unref(form).cost_price,
                              "onUpdate:modelValue": ($event) => unref(form).cost_price = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.cost_price
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode(_sfc_main$2, {
                              for: "selling_price",
                              value: "Selling Price"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "selling_price",
                              type: "number",
                              step: "any",
                              class: "block w-full mt-1",
                              modelValue: unref(form).selling_price,
                              "onUpdate:modelValue": ($event) => unref(form).selling_price = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.selling_price
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, [
                          createVNode("div", { class: "mt-4" }, [
                            createVNode(_sfc_main$2, {
                              for: "stock_quantity",
                              value: "Stock Quantity"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "stock_quantity",
                              type: "number",
                              class: "block w-full mt-1",
                              modelValue: unref(form).stock_quantity,
                              "onUpdate:modelValue": ($event) => unref(form).stock_quantity = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.stock_quantity
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "mt-4" }, [
                            createVNode(_sfc_main$2, {
                              for: "minimum_stock",
                              value: "Minimum Stock"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "minimum_stock",
                              type: "number",
                              class: "block w-full mt-1",
                              modelValue: unref(form).minimum_stock,
                              "onUpdate:modelValue": ($event) => unref(form).minimum_stock = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.minimum_stock
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, [
                          createVNode("div", { class: "mt-4" }, [
                            createVNode(_sfc_main$2, {
                              for: "unit",
                              value: "Unit"
                            }),
                            createVNode(_sfc_main$3, {
                              id: "unit",
                              type: "text",
                              class: "block w-full mt-1",
                              modelValue: unref(form).unit,
                              "onUpdate:modelValue": ($event) => unref(form).unit = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_sfc_main$4, {
                              class: "mt-2",
                              message: unref(form).errors.unit
                            }, null, 8, ["message"])
                          ])
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode(_sfc_main$2, {
                            for: "category_id",
                            value: "Category"
                          }),
                          withDirectives(createVNode("select", {
                            id: "category_id",
                            class: "block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
                            "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                            required: ""
                          }, [
                            createVNode("option", { value: "" }, "Select a category"),
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                              return openBlock(), createBlock("option", {
                                key: category.id,
                                value: category.id
                              }, toDisplayString(category.name), 9, ["value"]);
                            }), 128))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).category_id]
                          ]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.category_id
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mt-4" }, [
                          createVNode(_sfc_main$2, {
                            for: "image",
                            value: "Image"
                          }),
                          createVNode("input", {
                            id: "image",
                            type: "file",
                            class: "block w-full mt-1",
                            onInput: ($event) => unref(form).image = $event.target.files[0]
                          }, null, 40, ["onInput"]),
                          createVNode(_sfc_main$4, {
                            class: "mt-2",
                            message: unref(form).errors.image
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "flex items-center mt-4" }, [
                          withDirectives(createVNode("input", {
                            id: "is_active",
                            type: "checkbox",
                            class: "w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500",
                            "onUpdate:modelValue": ($event) => unref(form).is_active = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(form).is_active]
                          ]),
                          createVNode("label", {
                            for: "is_active",
                            class: "block ml-2 text-sm text-gray-900"
                          }, "Is Active")
                        ]),
                        createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                          createVNode(PrimaryButton, {
                            class: ["ml-4", { "opacity-25": unref(form).processing }],
                            disabled: unref(form).processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Update ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ])
                      ], 32)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Products/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
