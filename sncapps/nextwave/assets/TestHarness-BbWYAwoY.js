import { bu as gn, ak as mn, y as H, eu as bn, ev as Fe, d as L, q as h, Q as xt, a3 as ve, ew as fn, cn as we, A as X, n as re, ex as At, ai as yn, o as Et, aD as Ta, dx as oa, ey as vn, ez as wn, eA as xn, eB as Cn, eC as Tn, ab as kn, w as Ge, eD as Sn, eE as _n, eF as ka, eG as Sa, eH as Ct, eI as _a, a8 as t, h as Rt, eJ as Tt, eK as In, cS as An, eL as En, b$ as Rn, eM as Ia, eN as Ze, eO as kt, eP as Aa, eQ as Ea, cc as ye, aH as De, eR as Nn, eS as Ln, d_ as zn, eT as Dn, aP as Mn, eU as ra, aA as On, eV as Vn, eW as Pn, eX as Bn, d7 as Wn, eY as Hn, eZ as qn } from "./WidgetRenderer-C4Xp1hhZ.js";
import { s as mt, a as sa, c as da, g as Kn, u as Un } from "./main-ClrKLtPy.js";
function Ra(e, a) {
  const n = gn(mn);
  H(() => {
    if (!(!e || !n))
      return n.registerTools(e, a), () => {
        n.unregisterTools(e);
      };
  }, [e, a, n]);
}
const Fn = (e, a, n) => {
  const l = e[a];
  return l ? typeof l == "function" ? l() : Promise.resolve(l) : new Promise((o, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + a + (a.split("/").length !== n ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
function Gn() {
  if (typeof document > "u")
    return;
  const e = "test-harness-animations";
  if (document.getElementById(e))
    return;
  const a = document.createElement("style");
  a.id = e, a.textContent = `
		@keyframes testHarnessFadeIn {
			from {
				opacity: 0;
				transform: translateY(-10px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
	`, document.head.appendChild(a);
}
Gn();
function J(e) {
  return {
    type: "Card",
    ...e
  };
}
function Na(e) {
  return {
    type: "Carousel",
    ...e
  };
}
function Ae(e) {
  return {
    type: "CarouselItem",
    ...e
  };
}
function C(e) {
  return {
    type: "Button",
    ...e
  };
}
function N(e) {
  return {
    type: "Box",
    ...e
  };
}
function Y(e) {
  return {
    type: "Badge",
    ...e
  };
}
function w(e) {
  return {
    type: "Col",
    ...e
  };
}
function _(e) {
  return {
    type: "Row",
    ...e
  };
}
function W(e) {
  return {
    type: "Divider",
    ...e
  };
}
function s(e) {
  return {
    type: "Text",
    ...e
  };
}
function I(e) {
  return {
    type: "Title",
    ...e
  };
}
function M(e) {
  return {
    type: "Caption",
    ...e
  };
}
function Me(e) {
  return {
    type: "Label",
    ...e
  };
}
function ee(e) {
  return {
    type: "Image",
    ...e
  };
}
function j(e) {
  return {
    type: "Icon",
    ...e
  };
}
function ca(e) {
  return {
    type: "If",
    ...e
  };
}
function Xe(e) {
  return {
    type: "For",
    ...e
  };
}
function oe() {
  return {
    type: "Spacer"
  };
}
function _e(e) {
  return {
    type: "Input",
    ...e
  };
}
function he(e) {
  return {
    type: "Checkbox",
    ...e
  };
}
function La(e) {
  return {
    type: "RadioGroup",
    ...e
  };
}
function Nt(e) {
  return {
    type: "Select",
    ...e
  };
}
function za(e) {
  return {
    type: "Textarea",
    ...e
  };
}
function Da(e) {
  return {
    type: "DatePicker",
    ...e
  };
}
function jn(e) {
  return {
    type: "Markdown",
    ...e
  };
}
function St(e) {
  return {
    type: "Form",
    ...e
  };
}
function Lt(e) {
  return {
    type: "ListView",
    ...e
  };
}
function be(e) {
  return {
    type: "ListViewItem",
    ...e
  };
}
function Qn(e) {
  return {
    type: "Transition",
    ...e
  };
}
function Yn(e) {
  return {
    type: "Chart",
    ...e
  };
}
function $n(e) {
  return {
    type: "agenda",
    ...e
  };
}
function Jn(e) {
  return {
    type: "AgendaCalendar",
    ...e
  };
}
function Xn() {
  const e = (/* @__PURE__ */ new Date()).getHours(), a = e < 12 ? "morning" : e < 17 ? "afternoon" : "evening", n = /* @__PURE__ */ new Date(), l = n.toLocaleDateString("en-US", { weekday: "long" }), o = n.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  return {
    type: "Card",
    size: "auto",
    padding: 0,
    children: [
      // ── Hero Section with gradient background ──
      N({
        background: {
          light: "linear-gradient(135deg, #eef4ff 0%, #dbeafe 100%)",
          dark: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)"
        },
        padding: { x: 4, top: 4, bottom: 3 },
        gap: 2,
        children: [
          _({
            justify: "between",
            align: "center",
            children: [
              w({
                gap: 0,
                children: [
                  M({
                    value: `${l}  ·  ${o}`,
                    size: "sm"
                  }),
                  I({
                    value: `Good ${a}, Sarah`,
                    size: "lg",
                    weight: "bold"
                  }),
                  s({
                    value: "IT Service Desk  ·  Tier 2 Support",
                    size: "sm",
                    color: "secondary"
                  })
                ]
              }),
              N({
                size: 36,
                radius: "full",
                background: {
                  light: "rgba(37,99,235,0.1)",
                  dark: "rgba(255,255,255,0.15)"
                },
                align: "center",
                justify: "center",
                children: [
                  j({
                    name: "profile",
                    size: "md",
                    color: "primary"
                  })
                ]
              })
            ]
          }),
          // ── Status Chips ──
          _({
            gap: 1,
            children: [
              Y({
                label: "On Shift",
                color: "success",
                variant: "solid",
                size: "sm"
              }),
              Y({
                label: "Queue: Normal",
                color: "info",
                variant: "soft",
                size: "sm"
              }),
              Y({
                label: "3 VIP Tickets",
                color: "warning",
                variant: "soft",
                size: "sm"
              })
            ]
          })
        ]
      }),
      // ── Main Content Area ──
      w({
        padding: { x: 4, top: 3, bottom: 4 },
        gap: 3,
        children: [
          // ── Your Queue Snapshot ──
          w({
            gap: 2,
            children: [
              _({
                align: "center",
                justify: "between",
                children: [
                  I({
                    value: "Your Queue",
                    size: "sm",
                    weight: "semibold"
                  }),
                  C({
                    label: "View All",
                    variant: "ghost",
                    size: "xs",
                    iconEnd: "chevron-right",
                    onClickAction: {
                      type: "navigate",
                      handler: "server",
                      payload: { target: "queue" }
                    }
                  })
                ]
              }),
              _({
                gap: 2,
                children: [
                  N({
                    direction: "col",
                    flex: 1,
                    padding: 2,
                    radius: "md",
                    background: "surface-secondary",
                    align: "center",
                    gap: 0,
                    children: [
                      I({
                        value: "12",
                        size: "md",
                        weight: "bold",
                        color: "primary"
                      }),
                      M({
                        value: "Assigned",
                        size: "sm"
                      })
                    ]
                  }),
                  N({
                    direction: "col",
                    flex: 1,
                    padding: 2,
                    radius: "md",
                    background: "surface-secondary",
                    align: "center",
                    gap: 0,
                    children: [
                      I({
                        value: "4",
                        size: "md",
                        weight: "bold",
                        color: "warning"
                      }),
                      M({
                        value: "In Progress",
                        size: "sm"
                      })
                    ]
                  }),
                  N({
                    direction: "col",
                    flex: 1,
                    padding: 2,
                    radius: "md",
                    background: "surface-secondary",
                    align: "center",
                    gap: 0,
                    children: [
                      I({
                        value: "7",
                        size: "md",
                        weight: "bold",
                        color: "secondary"
                      }),
                      M({
                        value: "Pending",
                        size: "sm"
                      })
                    ]
                  }),
                  N({
                    direction: "col",
                    flex: 1,
                    padding: 2,
                    radius: "md",
                    background: {
                      light: "#fef2f2",
                      dark: "#2d1b1b"
                    },
                    align: "center",
                    gap: 0,
                    children: [
                      I({
                        value: "2",
                        size: "md",
                        weight: "bold",
                        color: "danger"
                      }),
                      M({
                        value: "SLA Risk",
                        size: "sm",
                        color: "danger"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          W(),
          // ── Priority Alerts ──
          w({
            gap: 2,
            children: [
              _({
                align: "center",
                gap: 1,
                children: [
                  j({
                    name: "bolt",
                    size: "sm",
                    color: "danger"
                  }),
                  I({
                    value: "Priority Alerts",
                    size: "sm",
                    weight: "semibold"
                  })
                ]
              }),
              Lt({
                limit: 3,
                children: [
                  be({
                    onClickAction: {
                      type: "open-ticket",
                      handler: "server",
                      payload: { ticketId: "INC0041892" }
                    },
                    children: [
                      _({
                        gap: 2,
                        align: "center",
                        children: [
                          N({
                            size: 28,
                            radius: "md",
                            background: {
                              light: "#fef2f2",
                              dark: "#2d1b1b"
                            },
                            align: "center",
                            justify: "center",
                            children: [
                              j({
                                name: "bolt",
                                size: "sm",
                                color: "danger"
                              })
                            ]
                          }),
                          w({
                            gap: 0,
                            flex: 1,
                            children: [
                              _({
                                align: "center",
                                gap: 1,
                                children: [
                                  s({
                                    value: "INC0041892",
                                    size: "sm",
                                    weight: "semibold"
                                  }),
                                  Y({
                                    label: "P1",
                                    color: "danger",
                                    variant: "solid",
                                    size: "sm"
                                  })
                                ]
                              }),
                              s({
                                value: "Production DB cluster unresponsive — Finance",
                                size: "sm",
                                color: "secondary",
                                truncate: !0,
                                maxLines: 1
                              })
                            ]
                          }),
                          M({
                            value: "12m",
                            size: "sm",
                            color: "danger"
                          })
                        ]
                      })
                    ]
                  }),
                  be({
                    onClickAction: {
                      type: "open-ticket",
                      handler: "server",
                      payload: { ticketId: "INC0041887" }
                    },
                    children: [
                      _({
                        gap: 2,
                        align: "center",
                        children: [
                          N({
                            size: 28,
                            radius: "md",
                            background: {
                              light: "#fff7ed",
                              dark: "#2d2418"
                            },
                            align: "center",
                            justify: "center",
                            children: [
                              j({
                                name: "bolt",
                                size: "sm",
                                color: "warning"
                              })
                            ]
                          }),
                          w({
                            gap: 0,
                            flex: 1,
                            children: [
                              _({
                                align: "center",
                                gap: 1,
                                children: [
                                  s({
                                    value: "INC0041887",
                                    size: "sm",
                                    weight: "semibold"
                                  }),
                                  Y({
                                    label: "P2",
                                    color: "warning",
                                    variant: "solid",
                                    size: "sm"
                                  }),
                                  Y({
                                    label: "VIP",
                                    color: "info",
                                    variant: "outline",
                                    size: "sm"
                                  })
                                ]
                              }),
                              s({
                                value: "SSO authentication failing for exec team",
                                size: "sm",
                                color: "secondary",
                                truncate: !0,
                                maxLines: 1
                              })
                            ]
                          }),
                          M({
                            value: "34m",
                            size: "sm",
                            color: "warning"
                          })
                        ]
                      })
                    ]
                  }),
                  be({
                    onClickAction: {
                      type: "open-ticket",
                      handler: "server",
                      payload: { ticketId: "INC0041885" }
                    },
                    children: [
                      _({
                        gap: 2,
                        align: "center",
                        children: [
                          N({
                            size: 28,
                            radius: "md",
                            background: {
                              light: "#fff7ed",
                              dark: "#2d2418"
                            },
                            align: "center",
                            justify: "center",
                            children: [
                              j({
                                name: "bolt",
                                size: "sm",
                                color: "warning"
                              })
                            ]
                          }),
                          w({
                            gap: 0,
                            flex: 1,
                            children: [
                              _({
                                align: "center",
                                gap: 1,
                                children: [
                                  s({
                                    value: "INC0041885",
                                    size: "sm",
                                    weight: "semibold"
                                  }),
                                  Y({
                                    label: "P2",
                                    color: "warning",
                                    variant: "solid",
                                    size: "sm"
                                  })
                                ]
                              }),
                              s({
                                value: "VPN gateway timeout — APAC region",
                                size: "sm",
                                color: "secondary",
                                truncate: !0,
                                maxLines: 1
                              })
                            ]
                          }),
                          M({
                            value: "1h",
                            size: "sm"
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          W(),
          // ── Quick Actions ──
          w({
            gap: 2,
            children: [
              I({
                value: "Quick Actions",
                size: "sm",
                weight: "semibold"
              }),
              _({
                gap: 2,
                children: [
                  C({
                    label: "Create Incident",
                    variant: "outline",
                    color: "primary",
                    size: "sm",
                    iconStart: "write",
                    onClickAction: {
                      type: "create-incident",
                      handler: "server",
                      payload: {}
                    }
                  }),
                  C({
                    label: "Knowledge Base",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    iconStart: "book-open",
                    onClickAction: {
                      type: "open-kb",
                      handler: "server",
                      payload: {}
                    }
                  }),
                  C({
                    label: "Reports",
                    variant: "outline",
                    color: "secondary",
                    size: "sm",
                    iconStart: "chart",
                    onClickAction: {
                      type: "open-reports",
                      handler: "server",
                      payload: {}
                    }
                  })
                ]
              })
            ]
          }),
          W(),
          // ── Team Performance ──
          w({
            gap: 2,
            children: [
              _({
                align: "center",
                gap: 1,
                children: [
                  j({
                    name: "analytics",
                    size: "sm",
                    color: "primary"
                  }),
                  I({
                    value: "Today's Team Performance",
                    size: "sm",
                    weight: "semibold"
                  })
                ]
              }),
              _({
                gap: 2,
                children: [
                  w({
                    flex: 1,
                    gap: 0,
                    children: [
                      I({
                        value: "94%",
                        size: "md",
                        weight: "bold",
                        color: "success"
                      }),
                      M({ value: "SLA Met", size: "sm" }),
                      M({
                        value: "↑ 3% from yesterday",
                        color: "success",
                        size: "sm"
                      })
                    ]
                  }),
                  w({
                    flex: 1,
                    gap: 0,
                    children: [
                      I({
                        value: "18m",
                        size: "md",
                        weight: "bold"
                      }),
                      M({ value: "Avg Response", size: "sm" }),
                      M({
                        value: "↓ 2m faster",
                        color: "success",
                        size: "sm"
                      })
                    ]
                  }),
                  w({
                    flex: 1,
                    gap: 0,
                    children: [
                      I({
                        value: "47",
                        size: "md",
                        weight: "bold"
                      }),
                      M({ value: "Resolved", size: "sm" }),
                      M({
                        value: "Team total",
                        size: "sm"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          W(),
          // ── Footer: System Notice ──
          _({
            gap: 2,
            align: "center",
            children: [
              j({
                name: "lightbulb",
                size: "sm",
                color: "info"
              }),
              s({
                value: "Maintenance tonight 11 PM–1 AM CST. CHG0085421.",
                size: "sm",
                color: "secondary"
              }),
              oe(),
              C({
                label: "Details",
                variant: "ghost",
                size: "xs",
                onClickAction: {
                  type: "open-change",
                  handler: "server",
                  payload: { changeId: "CHG0085421" }
                }
              })
            ]
          })
        ]
      })
    ]
  };
}
function Zn() {
  const e = {
    Title: {
      sectionTitle: "Titles",
      description: "Display headings and titles with various sizes and weights",
      examples: [
        I({ value: "Large Title", size: "lg" }),
        I({ value: "Medium Title", size: "md" }),
        I({ value: "Small Title", size: "sm" })
      ]
    },
    Text: {
      sectionTitle: "Text",
      description: "Display text content with different styles",
      examples: [
        s({ value: "Regular text with default styling", size: "md" }),
        s({ value: "Small secondary text", size: "sm", color: "secondary" }),
        s({ value: "Large emphasized text", size: "lg", color: "emphasis" }),
        s({ value: "Bold text", weight: "bold" }),
        s({ value: "Semibold text", weight: "semibold" })
      ]
    },
    Caption: {
      sectionTitle: "Caption",
      description: "Small text for captions and helper text",
      examples: [
        M({ value: "This is a caption with small text" }),
        M({ value: "Caption with secondary color", color: "secondary" })
      ]
    },
    Label: {
      sectionTitle: "Label",
      description: "Labels for form fields and inputs",
      examples: [
        Me({ value: "Field Label", fieldName: "input1" }),
        Me({ value: "Required Field", fieldName: "input2" })
      ]
    },
    Badge: {
      sectionTitle: "Badges",
      description: "Small status indicators with semantic colors",
      examples: [
        N({
          direction: "row",
          wrap: "wrap",
          gap: 8,
          children: [
            Y({ label: "Discovery", color: "discovery", pill: !0 }),
            Y({ label: "Success", color: "success", pill: !0 }),
            Y({ label: "Warning", color: "warning", pill: !0 }),
            Y({ label: "Danger", color: "danger", pill: !0 }),
            Y({ label: "Info", color: "info", pill: !0 })
          ]
        })
      ]
    },
    Button: {
      sectionTitle: "Buttons",
      description: "Interactive buttons with various styles and colors",
      examples: [
        N({
          direction: "row",
          wrap: "wrap",
          gap: 8,
          children: [
            C({
              label: "Primary",
              color: "primary",
              variant: "solid",
              onClickAction: { type: "test_action" }
            }),
            C({
              label: "Success",
              color: "success",
              variant: "solid",
              onClickAction: { type: "test_action" }
            }),
            C({
              label: "Danger",
              color: "danger",
              variant: "solid",
              onClickAction: { type: "test_action" }
            })
          ]
        }),
        N({
          direction: "row",
          wrap: "wrap",
          gap: 8,
          children: [
            C({
              label: "Outline",
              color: "primary",
              variant: "outline",
              onClickAction: { type: "test_action" }
            }),
            C({
              label: "Ghost",
              variant: "ghost",
              onClickAction: { type: "test_action" }
            }),
            C({
              label: "View",
              variant: "outline",
              ariaLabel: "View request details",
              onClickAction: { type: "test_action" }
            })
          ]
        })
      ]
    },
    Input: {
      sectionTitle: "Input Fields",
      description: "Text input fields for user data entry",
      examples: [
        w({
          gap: 8,
          children: [
            Me({ value: "Text Input", fieldName: "text_input" }),
            _e({
              name: "text_input",
              placeholder: "Enter text here...",
              variant: "soft",
              size: "md"
            }),
            Me({ value: "Email Input", fieldName: "email_input" }),
            _e({
              name: "email_input",
              placeholder: "email@example.com",
              inputType: "email",
              variant: "soft",
              size: "md"
            }),
            Me({ value: "Required Input", fieldName: "required_input" }),
            _e({
              name: "required_input",
              placeholder: "This field is required",
              variant: "soft",
              size: "md",
              required: !0
            })
          ]
        })
      ]
    },
    Textarea: {
      sectionTitle: "Textarea",
      description: "Multi-line text input fields",
      examples: [
        za({
          name: "description",
          placeholder: "Enter a longer description here...",
          variant: "soft",
          size: "md",
          rows: 4,
          autoResize: !0,
          maxRows: 8
        })
      ]
    },
    Select: {
      sectionTitle: "Select Dropdown",
      description: "Dropdown selection menus",
      examples: [
        Nt({
          name: "select_example",
          placeholder: "Choose an option",
          variant: "soft",
          size: "md",
          options: [
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
            { value: "option4", label: "Option 4" }
          ]
        })
      ]
    },
    DatePicker: {
      sectionTitle: "Date Picker",
      description: "Date selection input",
      examples: [
        Da({
          name: "date_example",
          variant: "soft",
          size: "md",
          clearable: !0
        })
      ]
    },
    Checkbox: {
      sectionTitle: "Checkboxes",
      description: "Multi-selection checkbox inputs",
      examples: [
        w({
          gap: 8,
          children: [
            he({ name: "checkbox1", label: "Regular checkbox option" }),
            he({ name: "checkbox2", label: "Another checkbox option" }),
            he({ name: "checkbox3", label: "Required checkbox", required: !0 })
          ]
        })
      ]
    },
    RadioGroup: {
      sectionTitle: "Radio Group",
      description: "Single-selection radio button groups",
      examples: [
        La({
          name: "radio_example",
          direction: "col",
          options: [
            { value: "radio1", label: "Radio Option 1" },
            { value: "radio2", label: "Radio Option 2" },
            { value: "radio3", label: "Radio Option 3" }
          ],
          defaultValue: "radio1"
        })
      ]
    },
    Image: {
      sectionTitle: "Images",
      description: "Display images with various shapes and sizes",
      examples: [
        _({
          children: [
            ee({
              src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop",
              alt: "Square image",
              size: 80
            }),
            ee({
              src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop",
              alt: "Circle image",
              size: 80,
              radius: "full"
            })
          ]
        }),
        ee({
          src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop",
          alt: "Full width image",
          aspectRatio: 1.7778
        })
      ]
    },
    InteractiveViewButton: {
      sectionTitle: "Interactive View Button",
      description: "Standalone toggle button that opens/closes an interactive view panel",
      examples: [
        {
          type: "InteractiveViewButton",
          label: "View Analysis",
          viewType: "aix_widget",
          widget_id: "demo-widget",
          widget_name: "Demo Widget",
          payload: {}
        }
      ]
    },
    Icon: {
      sectionTitle: "Icons",
      description: "SVG icons for visual indicators",
      examples: [
        N({
          direction: "row",
          wrap: "wrap",
          gap: 12,
          children: [
            j({ name: "sparkle", size: "md" }),
            j({ name: "atom", size: "md" }),
            j({ name: "lightbulb", size: "md" })
          ]
        })
      ]
    },
    If: {
      sectionTitle: "Conditional (If)",
      description: "Conditionally render children based on a boolean value",
      examples: [
        w({
          gap: 8,
          children: [
            s({ value: "condition: true (visible)", size: "sm", color: "secondary" }),
            ca({
              condition: !0,
              children: [
                N({
                  padding: 12,
                  background: { light: "#e8f5e9", dark: "#1b5e20" },
                  radius: "md",
                  children: [s({ value: "This content is visible!" })]
                })
              ]
            }),
            s({ value: "condition: false (hidden)", size: "sm", color: "secondary" }),
            ca({
              condition: !1,
              children: [
                N({
                  padding: 12,
                  background: { light: "#ffebee", dark: "#b71c1c" },
                  radius: "md",
                  children: [s({ value: "This content is hidden" })]
                })
              ]
            }),
            s({
              value: "(nothing renders above when condition is false)",
              size: "sm",
              color: "secondary"
            })
          ]
        })
      ]
    },
    Markdown: {
      sectionTitle: "Markdown",
      description: "Render markdown formatted text",
      examples: [
        jn({
          value: `This is **bold** and this is *italic*.

- List item 1
- List item 2
- [ServiceNow Documentation](https://docs.servicenow.com)

\`inline code\`

Visit the [ServiceNow Community](https://community.servicenow.com) for more info, or check the [Developer Portal](https://developer.servicenow.com).`
        })
      ]
    },
    Box: {
      sectionTitle: "Box Layout",
      description: "Flexible container for arranging content",
      examples: [
        N({
          direction: "row",
          wrap: "wrap",
          gap: 8,
          children: [
            N({
              direction: "col",
              gap: 4,
              children: [s({ value: "Box Item 1", size: "sm" })]
            }),
            N({
              direction: "col",
              gap: 4,
              children: [s({ value: "Box Item 2", size: "sm" })]
            }),
            N({
              direction: "col",
              gap: 4,
              children: [s({ value: "Box Item 3", size: "sm" })]
            })
          ]
        })
      ]
    },
    Row: {
      sectionTitle: "Row Layout",
      description: "Horizontal layout container",
      examples: [
        _({
          children: [
            s({ value: "Item 1", size: "sm" }),
            s({ value: "Item 2", size: "sm" }),
            s({ value: "Item 3", size: "sm" })
          ]
        })
      ]
    },
    Col: {
      sectionTitle: "Column Layout",
      description: "Vertical layout container with spacing",
      examples: [
        w({
          gap: 12,
          children: [
            s({ value: "Column Item 1", size: "sm" }),
            s({ value: "Column Item 2", size: "sm" }),
            s({ value: "Column Item 3", size: "sm" })
          ]
        })
      ]
    },
    Spacer: {
      sectionTitle: "Spacer",
      description: "Flexible spacing element for layouts",
      examples: [
        _({
          children: [
            s({ value: "Left", size: "sm" }),
            oe(),
            s({ value: "Right", size: "sm" })
          ]
        })
      ]
    },
    Divider: {
      sectionTitle: "Dividers",
      description: "Visual separators between content",
      examples: [
        s({ value: "Content above divider", size: "sm" }),
        W(),
        s({ value: "Content below divider", size: "sm" })
      ]
    },
    Card: {
      sectionTitle: "Card",
      description: "Container for grouped content",
      examples: [
        {
          type: "Card",
          size: "sm",
          children: [
            I({ value: "Example Card", size: "md" }),
            s({ value: "This is content inside a card component", size: "sm" })
          ]
        }
      ]
    },
    Carousel: {
      sectionTitle: "Carousel",
      description: "Navigate through items one at a time with prev/next controls",
      examples: [
        Na({
          children: [
            Ae({
              children: [
                ee({
                  src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
                  alt: "Slide 1",
                  aspectRatio: 1.6
                }),
                s({ value: "Slide 1 of 3", weight: "bold" })
              ],
              onSelectAction: { type: "picker.select", payload: { value: "slide-1" } }
            }),
            Ae({
              children: [
                ee({
                  src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
                  alt: "Slide 2",
                  aspectRatio: 1.6
                }),
                s({ value: "Slide 2 of 3", weight: "bold" })
              ],
              onSelectAction: { type: "picker.select", payload: { value: "slide-2" } }
            }),
            Ae({
              children: [
                ee({
                  src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
                  alt: "Slide 3",
                  aspectRatio: 1.6
                }),
                s({ value: "Slide 3 of 3", weight: "bold" })
              ],
              onSelectAction: { type: "picker.select", payload: { value: "slide-3" } }
            })
          ]
        })
      ]
    },
    CarouselItem: {
      sectionTitle: "Carousel Item",
      description: "Individual slide within a Carousel",
      examples: [],
      skipInKitchenSink: !0
    },
    For: {
      sectionTitle: "Loop Iterator (For)",
      description: "Dynamically render widgets from an array of data using template substitution",
      examples: [
        w({
          gap: 12,
          children: [
            s({
              value: "Example 1: Loop through items to create buttons",
              size: "sm",
              color: "secondary"
            }),
            N({
              direction: "col",
              gap: 4,
              padding: 12,
              background: { light: "#f3e5f5", dark: "#4a148c" },
              radius: "md",
              children: [
                Xe({
                  items: [
                    { value: "A", label: "Option A", disabled: !1 },
                    { value: "B", label: "Option B", disabled: !1 },
                    { value: "C", label: "Option C (disabled)", disabled: !0 }
                  ],
                  template: C({
                    label: "{{label}}",
                    variant: "outline",
                    size: "sm",
                    disabled: "{{disabled}}",
                    block: !0
                  })
                })
              ]
            }),
            s({
              value: "(3 buttons generated from items array with {{label}} and {{disabled}} substitution)",
              size: "xs",
              color: "secondary"
            }),
            W({ spacing: 16 }),
            s({
              value: "Example 2: Loop to create complex layouts with multiple widgets",
              size: "sm",
              color: "secondary"
            }),
            N({
              direction: "col",
              gap: 4,
              padding: 12,
              background: { light: "#e3f2fd", dark: "#0d47a1" },
              radius: "md",
              children: [
                Xe({
                  items: [
                    { name: "One", value: "uno", id: "1" },
                    { name: "Two", value: "dos", id: "2" },
                    { name: "Three", value: "tres", id: "3" }
                  ],
                  template: _({
                    key: "{{id}}",
                    gap: 8,
                    children: [
                      s({ value: "{{name}}", weight: "bold" }),
                      C({ label: "{{value}}", size: "xs", variant: "soft" })
                    ]
                  })
                })
              ]
            }),
            s({
              value: "(3 rows generated with {{name}}, {{value}}, and {{id}} substitution)",
              size: "xs",
              color: "secondary"
            }),
            W({ spacing: 16 }),
            s({
              value: "Example 3: Complete Card with choice picker (like screenshot)",
              size: "sm",
              color: "secondary"
            }),
            {
              type: "Card",
              size: "sm",
              padding: 20,
              children: [
                w({
                  gap: 16,
                  children: [
                    I({
                      value: "Please select an option: P, N, or O.",
                      size: "sm"
                    }),
                    Xe({
                      items: [
                        { value: "P", label: "P", id: "opt-p" },
                        { value: "N", label: "N", id: "opt-n" },
                        { value: "O", label: "O", id: "opt-o" }
                      ],
                      template: C({
                        label: "{{label}}",
                        pill: !0,
                        variant: "solid",
                        color: "primary",
                        size: "lg",
                        block: !0,
                        onClickAction: {
                          type: "picker.select",
                          payload: { value: "{{value}}" }
                        }
                      })
                    }),
                    W({ spacing: 8 }),
                    C({
                      label: "Show more",
                      pill: !0,
                      variant: "solid",
                      color: "primary",
                      size: "lg",
                      block: !0,
                      onClickAction: {
                        type: "picker.showMore",
                        payload: { limit: 10 }
                      }
                    })
                  ]
                })
              ]
            },
            s({
              value: "(Complete choice picker card with For loop generating option buttons)",
              size: "xs",
              color: "secondary"
            })
          ]
        })
      ]
    },
    Form: {
      sectionTitle: "Form",
      description: "Form container with submit handling",
      examples: [
        St({
          children: [
            _e({ name: "form_input", placeholder: "Enter value" }),
            C({
              label: "Submit",
              onClickAction: { type: "submit_form" }
            })
          ]
        })
      ]
    },
    ListView: {
      sectionTitle: "List View",
      description: "Scrollable list of items",
      examples: [
        Lt({
          children: [
            be({ children: [s({ value: "List Item 1" })] }),
            be({ children: [s({ value: "List Item 2" })] }),
            be({ children: [s({ value: "List Item 3" })] })
          ]
        })
      ]
    },
    ListViewItem: {
      sectionTitle: "List View Item",
      description: "Individual item in a list view",
      examples: [
        be({
          children: [
            s({ value: "Standalone list item with icon" }),
            j({ name: "sparkle" })
          ]
        })
      ]
    },
    Transition: {
      sectionTitle: "Transition",
      description: "Animated transitions between states",
      examples: [
        Qn({
          children: s({ value: "Content with transition animation" })
        })
      ]
    },
    chart: {
      sectionTitle: "Chart (legacy)",
      description: "Backward-compatible lowercase variant of Chart",
      examples: [],
      skipInKitchenSink: !0
    },
    Chart: {
      sectionTitle: "Chart",
      description: "Data visualization with bar, line, and area charts",
      examples: [
        Yn({
          title: "Monthly Sales",
          description: "Sales data for the past 6 months",
          data: [
            { month: "Jan", sales: 4e3, expenses: 2400 },
            { month: "Feb", sales: 3e3, expenses: 1398 },
            { month: "Mar", sales: 2e3, expenses: 9800 },
            { month: "Apr", sales: 2780, expenses: 3908 },
            { month: "May", sales: 1890, expenses: 4800 },
            { month: "Jun", sales: 2390, expenses: 3800 }
          ],
          xAxis: "month",
          series: [
            { type: "bar", dataKey: "sales", name: "Sales", color: "blue" },
            { type: "line", dataKey: "expenses", name: "Expenses", color: "red" }
          ]
        })
      ]
    },
    Map: {
      sectionTitle: "Map",
      description: "Interactive map with markers and overlays",
      examples: [
        {
          type: "Map",
          id: "kitchen-sink-map",
          height: "400px",
          center: { lat: 37.3861, lng: -121.9822 },
          zoom: 13,
          markers: [
            {
              id: "location1",
              lat: 37.3861,
              lng: -121.9822,
              title: "Main Office",
              description: "Company Headquarters",
              category: "office",
              color: "primary"
            },
            {
              id: "location2",
              lat: 37.3891,
              lng: -121.9805,
              title: "Meeting Point",
              description: "Conference Center",
              category: "meeting",
              color: "success",
              highlighted: !0
            }
          ],
          circle: {
            center: { lat: 37.3861, lng: -121.9822 },
            radius: 2e3,
            color: "primary",
            fillOpacity: 0.15
          }
        }
      ]
    },
    SearchResults: {
      sectionTitle: "Search Results",
      description: "Display search results with filters",
      examples: [
        {
          type: "SearchResults",
          id: "search-results-demo",
          title: "Search Results",
          filters: [
            { sysId: null, label: "All", count: 2 },
            { sysId: "filter-article", label: "Article", count: 1 },
            { sysId: "filter-catalog", label: "Catalog", count: 1 }
          ],
          sortOptions: [
            { sysId: null, label: "Most relevant" },
            { sysId: "sort-recent", label: "Most recent" }
          ],
          results: [
            {
              sysId: "result1",
              title: "Example Document",
              description: "This is an example search result.",
              source: "Article",
              identifier: "KB000101",
              timestamp: "2 days ago",
              icon: "document"
            },
            {
              sysId: "result2",
              title: "Another Result",
              description: "Another example search result item.",
              source: "Catalog",
              timestamp: "1 week ago",
              icon: "document"
            }
          ]
        }
      ]
    },
    AgendaCalendar: {
      sectionTitle: "Agenda Calendar (Client)",
      description: "Interactive calendar for date selection",
      examples: [
        Jn({
          name: "event_calendar",
          current: "2024-01-15T00:00:00Z",
          selected: "2024-01-15T00:00:00Z"
        })
      ]
    },
    agenda: {
      sectionTitle: "Agenda Calendar (Backend)",
      description: "Calendar with events displayed in agenda format",
      examples: [
        $n({
          name: "Team Events",
          current: "2024-01-15T00:00:00Z",
          events: [
            {
              id: "1",
              title: "Team Standup",
              start: "2024-01-15T09:00:00Z",
              end: "2024-01-15T09:30:00Z",
              description: "Daily team sync meeting",
              location: "Conference Room A",
              color: "blue"
            },
            {
              id: "2",
              title: "Product Review",
              start: "2024-01-15T14:00:00Z",
              end: "2024-01-15T15:00:00Z",
              description: "Review Q1 product roadmap",
              location: "Main Office",
              color: "green"
            },
            {
              id: "3",
              title: "Client Meeting",
              start: "2024-01-16T10:00:00Z",
              end: "2024-01-16T11:30:00Z",
              description: "Quarterly business review with Acme Corp",
              location: "Virtual - Zoom",
              color: "purple"
            }
          ]
        })
      ]
    },
    Table: {
      sectionTitle: "Table",
      description: "Display tabular data with columns, rows, and interactive actions",
      examples: [
        {
          type: "Table",
          columns: [
            { key: "number", header: "Number" },
            { key: "caller", header: "Caller" },
            { key: "shortDescription", header: "Short description" },
            { key: "priority", header: "Priority" },
            { key: "category", header: "Category" }
          ],
          rows: [
            {
              id: "INC001",
              number: "INC0010451",
              caller: "Alex Nguyen",
              shortDescription: "VPN cannot connect after Windows update broke the client configuration",
              priority: "2 - High",
              category: "Network",
              href: "/incident/INC0010451",
              onClickAction: {
                type: "incident.view",
                handler: "server",
                payload: { incidentId: "INC0010451" }
              }
            },
            {
              id: "INC002",
              number: "INC0010452",
              caller: "Maria Gomez",
              shortDescription: "Laptop won't power on after liquid damage",
              priority: "1 - Critical",
              category: "Hardware",
              href: "/incident/INC0010452",
              onClickAction: {
                type: "incident.view",
                handler: "server",
                payload: { incidentId: "INC0010452" }
              }
            },
            {
              id: "INC003",
              number: "INC0010453",
              caller: "Samir Patel",
              shortDescription: "Okta MFA reset needed after phone was lost during travel",
              priority: "2 - High",
              category: "Security",
              href: "/incident/INC0010453",
              onClickAction: {
                type: "incident.view",
                handler: "server",
                payload: { incidentId: "INC0010453" }
              }
            }
          ]
        }
      ]
    },
    aix_widget: {
      sectionTitle: "AI Experience Widget",
      description: "Widgets defined on the server (e.g., Lit.js-based AIX widgets)",
      examples: [],
      skipInKitchenSink: !0
    },
    Synthesized: {
      sectionTitle: "Synthesized Content",
      description: "Server-synthesized content with assistant message payload",
      examples: [],
      skipInKitchenSink: !0
    },
    Video: {
      sectionTitle: "Video",
      description: "Embedded video content from YouTube or direct URLs",
      examples: [
        {
          type: "Video",
          src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          title: "YouTube Video Example",
          aspectRatio: "16/9",
          autoplay: !1,
          controls: !0
        }
      ]
    },
    macroponent: {
      sectionTitle: "Macroponent",
      description: "Platform-native macroponent rendered in interactive view",
      examples: [],
      skipInKitchenSink: !0
    },
    seismic: {
      sectionTitle: "Seismic",
      description: "Platform-native seismic component rendered in interactive view",
      examples: [],
      skipInKitchenSink: !0
    },
    custom_control: {
      sectionTitle: "Custom Control",
      description: "Seismic-based interactive control that captures user input",
      examples: [],
      skipInKitchenSink: !0
    },
    promoted_skills: {
      sectionTitle: "Promoted Skills",
      description: "Displays promoted skills/topics for quick user access",
      examples: [],
      skipInKitchenSink: !0
    },
    Workflow: {
      sectionTitle: "Workflow",
      description: 'Collapsible "AI Steps" progress list rendered as a standalone widget',
      examples: [
        {
          type: "Workflow",
          workflow: {
            type: "custom",
            expanded: !0,
            summary: { title: "AI Steps" },
            tasks: [
              { type: "custom", status_indicator: "complete", title: "Read your question" },
              { type: "custom", status_indicator: "complete", title: "Queried the task data" },
              { type: "custom", status_indicator: "loading", title: "Composed the answer" }
            ]
          }
        }
      ]
    }
  }, a = [
    I({
      value: "🎨 Widget Kitchen Sink",
      size: "lg",
      weight: "bold"
    }),
    s({
      value: "Exhaustive showcase of ALL widget components",
      size: "sm",
      color: "secondary"
    }),
    W()
  ];
  for (const [n, l] of Object.entries(e))
    l.skipInKitchenSink || (a.push(
      I({
        value: l.sectionTitle,
        size: "md",
        weight: "semibold"
      })
    ), l.description && a.push(
      s({
        value: l.description,
        size: "sm",
        color: "secondary"
      })
    ), a.push(...l.examples), a.push(W()));
  return a.push(
    s({
      value: "✅ All widget components demonstrated!",
      weight: "bold",
      size: "md",
      color: "emphasis"
    })
  ), {
    type: "Card",
    children: a
  };
}
const et = "tickets-list", ei = [
  { id: "TCK-1024", title: "Checkout fails on Safari", priority: "P1" },
  { id: "TCK-1025", title: "Webhook retries timing out", priority: "P2" },
  { id: "TCK-1030", title: "Tooltip overlaps button on mobile", priority: "P3" },
  { id: "TCK-1033", title: "500 on /api/invoices intermittently", priority: "P1" },
  { id: "TCK-1037", title: "Export CSV mislabels columns", priority: "P2" },
  { id: "TCK-1041", title: "Avatar upload cropping issue", priority: "P3" },
  { id: "TCK-1042", title: "Search results missing pagination", priority: "P2" },
  { id: "TCK-1045", title: "Password reset email not sending", priority: "P1" }
], ti = [
  { value: "all", label: "All" },
  { value: "P1", label: "P1 (Critical)" },
  { value: "P2", label: "P2 (High)" },
  { value: "P3", label: "P3 (Normal)" }
];
function ai() {
  return be({
    gap: 12,
    align: "center",
    children: [
      // Color indicator bar on the left
      N({
        background: "{{priorityColor}}",
        radius: "full",
        width: 4,
        height: "100%"
      }),
      // Title and subtitle column
      w({
        gap: 2,
        children: [
          s({
            value: "{{title}}",
            size: "sm",
            weight: "semibold"
          }),
          s({
            value: "{{id}} • {{priority}}",
            size: "xs",
            color: "secondary"
          })
        ]
      }),
      oe(),
      // Badge-like pill on the right using Box
      N({
        background: "{{badgeBgColor}}",
        padding: { x: 8, y: 4 },
        radius: "full",
        children: [
          s({
            value: "{{priority}}",
            size: "xs",
            weight: "semibold",
            color: "{{badgeTextColor}}"
          })
        ]
      })
    ]
  });
}
function ni() {
  return ei.map((e) => {
    const a = {
      P1: {
        priorityColor: "rgb(239 68 68)",
        // red
        badgeBgColor: "rgba(239, 68, 68, 0.1)",
        badgeTextColor: "rgb(220 38 38)"
      },
      P2: {
        priorityColor: "rgb(59 130 246)",
        // blue
        badgeBgColor: "rgba(59, 130, 246, 0.1)",
        badgeTextColor: "rgb(37 99 235)"
      },
      P3: {
        priorityColor: "rgb(34 197 94)",
        // green
        badgeBgColor: "rgba(34, 197, 94, 0.1)",
        badgeTextColor: "rgb(22 163 74)"
      }
    }, n = a[e.priority] || a.P3;
    return {
      ...e,
      ...n
    };
  });
}
function ii() {
  const e = [
    // Header row with title and filter
    _({
      align: "center",
      children: [
        I({
          value: "Open tickets",
          size: "sm"
        }),
        oe(),
        Nt({
          name: "filters.priority",
          options: ti,
          defaultValue: "all",
          pill: !0,
          size: "sm",
          onChangeAction: {
            type: "listitems.filter",
            handler: "client",
            payload: {
              targetId: et,
              field: "priority"
              // Note: 'value' is automatically added by the Select widget
            }
          }
        })
      ]
    }),
    W({ spacing: 12 }),
    // Ticket list with For loop
    Lt({
      id: et,
      limit: 8,
      children: [
        Xe({
          items: ni(),
          template: ai()
        })
      ]
    })
  ];
  return J({
    id: "list-filter-demo",
    size: "lg",
    children: e
  });
}
const li = () => ({
  type: "SearchResults",
  id: "search-results-demo",
  title: "Sources and more",
  filters: [
    {
      sysId: null,
      label: "All",
      count: 6
    },
    {
      sysId: "34831b9d5b231010d9a5ce1a8581c7f4",
      label: "Knowledge",
      count: 3
    },
    {
      sysId: "78831b9d5b231010d9a5ce1a8581c7f4",
      label: "Catalog",
      count: 2
    },
    {
      sysId: "99831b9d5b231010d9a5ce1a8581c7f4",
      label: "Public Web",
      count: 1
    }
  ],
  sortOptions: [
    {
      sysId: null,
      label: "Most relevant"
    },
    {
      sysId: "8269e6805b0320101b488d769e81c7bb",
      label: "Most recent"
    }
  ],
  sources: [
    {
      sysId: "34833b9d5b231010d9a5de1a8581c7f4",
      title: "Leave policies",
      description: "Information about leave types and impacts on your paycheck.",
      source: "Knowledge",
      timestamp: "2 months ago",
      url: "https://example.servicenow.com/kb_view.do?sysparm_article=KB0010001"
    },
    {
      sysId: "45944c0e6c342121eab6ef2b9692d8e5",
      title: "Time off requests",
      description: "How to submit and manage your time off requests.",
      source: "Knowledge",
      timestamp: "3 months ago",
      url: "https://example.servicenow.com/kb_view.do?sysparm_article=KB0010002"
    },
    {
      sysId: null,
      title: "FMLA Guidelines",
      description: "Federal and state family leave regulations overview.",
      source: "Public Web",
      timestamp: "1 month ago",
      url: "https://www.dol.gov/agencies/whd/fmla",
      external: !0
    }
  ],
  results: [
    {
      sysId: "12831b9d5b231010d9a5ce1a8581c7f5",
      title: "Leave of Absence Policies",
      description: "Information about leave types and impacts on your paycheck.",
      source: "Catalog",
      timestamp: "8 months ago",
      external: !1
    },
    {
      sysId: "93831b9d5b231010d9a5ce1a8581c7f2",
      title: "Parental Leave Program",
      description: "Information about leave types and impacts on your paycheck.",
      source: "Knowledge",
      timestamp: "6 months ago",
      external: !1
    },
    {
      sysId: "14831b9d5b231010d9a5ce1a8581c7d4",
      title: "Parental Leave Program",
      description: "Information about leave types and impacts on your paycheck.",
      source: "Knowledge",
      timestamp: "6 months ago",
      external: !1
    },
    {
      sysId: null,
      title: "Parental Leave Program",
      description: "Information about leave types and impacts on your paycheck.",
      source: "Public Web",
      timestamp: "6 months ago",
      external: !0
    }
  ]
}), ge = "widget-actions-demo", Ma = "external-incident-widget";
function Ve(e = {}) {
  const { counter: a = 0 } = e, n = [
    I({
      value: "Widget Actions Demo",
      size: "lg",
      weight: "bold"
    }),
    s({
      value: "Test widget actions with different handler types. Check the browser console for action results.",
      size: "sm",
      color: "secondary"
    }),
    W({ spacing: 16 }),
    // Server Handler Section
    I({
      value: 'Server Handler (handler: "server")',
      size: "md",
      weight: "semibold"
    }),
    s({
      value: "These actions are sent to the server via POST /chat/widget-action → OGCS → AO",
      size: "sm",
      color: "secondary"
    }),
    N({
      direction: "row",
      gap: 8,
      children: [
        C({
          label: "Refresh Data",
          variant: "solid",
          color: "primary",
          onClickAction: {
            type: "refresh-data",
            handler: "server",
            payload: { source: "manual", timestamp: Date.now() }
          }
        }),
        C({
          label: "Submit Form",
          variant: "outline",
          color: "primary",
          onClickAction: {
            type: "submit-form",
            handler: "server",
            payload: { formId: "demo-form", values: { name: "Test" } }
          }
        }),
        C({
          label: "Default (Server)",
          variant: "ghost",
          onClickAction: {
            type: "default-action",
            // No handler specified - defaults to 'server'
            payload: { info: "This uses default server handler" }
          }
        })
      ]
    }),
    W({ spacing: 16 }),
    // Client Handler Section
    I({
      value: 'Client Handler (handler: "client")',
      size: "md",
      weight: "semibold"
    }),
    s({
      value: "These actions execute locally via registered client tools. The widget must register handlers using useClientTools hook.",
      size: "sm",
      color: "secondary"
    }),
    // Counter display - shows the current counter value inside the widget
    N({
      direction: "row",
      gap: 12,
      align: "center",
      children: [
        s({
          value: "Widget Counter:",
          size: "md",
          weight: "semibold"
        }),
        Y({
          label: String(a),
          color: a > 0 ? "success" : "secondary",
          pill: !0
        }),
        s({
          value: '← Click "Update Counter" to modify this value',
          size: "sm",
          color: "secondary"
        })
      ]
    }),
    N({
      direction: "row",
      gap: 8,
      children: [
        C({
          label: "Show Alert",
          variant: "solid",
          color: "success",
          onClickAction: {
            type: "show-alert",
            handler: "client",
            payload: { message: "Hello from client tool!" }
          }
        }),
        C({
          label: "Update Counter (+1)",
          variant: "outline",
          color: "success",
          onClickAction: {
            type: "update-counter",
            handler: "client",
            payload: { increment: 1 }
          }
        }),
        C({
          label: "Toggle Theme",
          variant: "ghost",
          color: "success",
          onClickAction: {
            type: "toggle-theme",
            handler: "client",
            payload: {}
          }
        })
      ]
    }),
    W({ spacing: 16 }),
    // AIEL Handler Section
    I({
      value: 'AIEL Handler (handler: "aiel")',
      size: "md",
      weight: "semibold"
    }),
    s({
      value: "These actions dispatch a widget:action event for the AIEL layer to handle.",
      size: "sm",
      color: "secondary"
    }),
    N({
      direction: "row",
      gap: 8,
      children: [
        C({
          label: "AIEL Action 1",
          variant: "solid",
          color: "warning",
          onClickAction: {
            type: "aiel-action-1",
            handler: "aiel",
            payload: { data: "custom-data" }
          }
        }),
        C({
          label: "Dynamic Guidance (AIEL)",
          variant: "solid",
          color: "danger",
          onClickAction: {
            type: "SN_HELP_ASSISTANT#START_DYNAMIC_GUIDANCE",
            handler: "aiel",
            payload: { guidanceId: "test-guidance-123" }
          }
        }),
        C({
          label: "Dynamic Guidance (Client)",
          variant: "outline",
          color: "danger",
          onClickAction: {
            type: "SN_HELP_ASSISTANT#START_DYNAMIC_GUIDANCE",
            handler: "client",
            payload: { guidanceId: "test-guidance-123" }
          }
        }),
        C({
          label: "AIEL Action 2",
          variant: "outline",
          color: "warning",
          onClickAction: {
            type: "aiel-action-2",
            handler: "aiel",
            payload: {}
          }
        })
      ]
    }),
    W({ spacing: 16 }),
    // Cross-Widget Targeting Section
    I({
      value: "Cross-Widget Targeting (widgetId override)",
      size: "md",
      weight: "semibold"
    }),
    s({
      value: `These buttons target an external widget's client tool using the widgetId field on the action. The "close-incident" tool is registered by ExternalWidgetDemoHandler under a different widget ID.`,
      size: "sm",
      color: "secondary"
    }),
    N({
      direction: "row",
      gap: 8,
      children: [
        C({
          label: "Close Incident (External)",
          variant: "solid",
          color: "danger",
          onClickAction: {
            type: "close-incident",
            handler: "client",
            widgetId: Ma,
            payload: {
              incident_id: "INC0012345",
              close_code: "Resolved",
              close_notes: "Issue resolved via chatkit button targeting external widget tool"
            }
          }
        }),
        C({
          label: "Close Incident (No Override)",
          variant: "outline",
          color: "danger",
          onClickAction: {
            type: "close-incident",
            handler: "client",
            // No widgetId - uses chatkit widget's own ID, which will fail
            // because close-incident is not registered on this widget
            payload: {
              incident_id: "INC0012345",
              close_code: "Resolved",
              close_notes: "This should fail or fall through to AIEL"
            }
          }
        })
      ]
    }),
    W({ spacing: 16 }),
    // Instructions
    w({
      gap: 8,
      children: [
        I({
          value: "Testing Instructions",
          size: "sm",
          weight: "semibold"
        }),
        s({
          value: "1. Server actions: Check Network tab for POST to /chat/widget-action",
          size: "sm"
        }),
        s({
          value: '2. Client actions: Check console for "[ClientToolsProvider]" logs',
          size: "sm"
        }),
        s({
          value: '3. AIEL actions: Check console for "widget:action" event logs',
          size: "sm"
        }),
        s({
          value: "4. Dynamic Guidance (AIEL): dispatches widget:action + DOM CustomEvent with action type",
          size: "sm"
        }),
        s({
          value: "5. Dynamic Guidance (Client): triggers ClientToolsProvider fallback (AIEL event bus + DOM CustomEvent)",
          size: "sm"
        }),
        s({
          value: '6. Cross-widget: "Close Incident (External)" should trigger alert; "(No Override)" should fail/fall through',
          size: "sm"
        })
      ]
    })
  ];
  return {
    type: "Card",
    id: ge,
    size: "lg",
    children: n
  };
}
const bt = 300;
function oi(e) {
  return [
    // ============ DEV TOOLS TAB ============
    {
      id: "devtools-load-static-suggestions",
      label: "🔍 Load Static Suggestions",
      tab: "devtools",
      group: "Static Data",
      onClick: e.handleLoadStaticSuggestions,
      requiresThread: !1,
      isDefaultQuickAction: !0
    },
    // ============ CONTENT TAB ============
    // Text Messages Group
    {
      id: "content-send-message",
      label: "💬 Send Message",
      tab: "content",
      group: "Text Messages",
      onClick: e.handleSendUserMessage,
      requiresThread: !0
    },
    {
      id: "content-streaming-response",
      label: "📝 Streaming Response",
      tab: "content",
      group: "Text Messages",
      onClick: e.handleStreamingResponse,
      requiresThread: !0,
      isDefaultQuickAction: !0
    },
    {
      id: "content-greeting",
      label: "👋 Greeting",
      tab: "content",
      group: "Text Messages",
      onClick: () => e.handleSampleMessage("greeting"),
      requiresThread: !0
    },
    {
      id: "content-analysis",
      label: "📊 Analysis",
      tab: "content",
      group: "Text Messages",
      onClick: () => e.handleSampleMessage("analysis"),
      requiresThread: !0
    },
    {
      id: "content-multi-paragraph",
      label: "📄 Multi-paragraph",
      tab: "content",
      group: "Text Messages",
      onClick: () => e.handleSampleMessage("multiParagraph"),
      requiresThread: !0
    },
    {
      id: "content-complex-markdown",
      label: "📋 Complex Markdown",
      tab: "content",
      group: "Text Messages",
      onClick: () => e.handleSampleMessage("complexMarkdown"),
      requiresThread: !0,
      isDefaultQuickAction: !0
    },
    {
      id: "content-persist-unread-thread",
      label: "🔴 Create unread thread",
      tab: "content",
      group: "Text Messages",
      onClick: e.handleCreateThreadUnread,
      requiresThread: !1
    },
    {
      id: "content-thread-with-history",
      label: "📜 Thread with history (paginated)",
      tab: "content",
      group: "Text Messages",
      description: "Creates a thread with 60 pre-populated messages (30 exchanges) to test infinite scroll and pagination",
      onClick: e.handleCreateThreadWithHistory,
      requiresThread: !1
    },
    // Live Agent Group
    {
      id: "content-live-agent-available",
      label: "🟢 Live Agent Available",
      tab: "content",
      group: "Live Agent",
      onClick: e.handleLiveAgentAvailable,
      requiresThread: !1
    },
    {
      id: "content-live-agent-connect",
      label: "📞 Live Agent Connect",
      tab: "content",
      group: "Live Agent",
      onClick: e.handleLiveAgentConnect,
      requiresThread: !0
    },
    {
      id: "content-live-agent-message",
      label: "👩 Live Agent Message",
      tab: "content",
      group: "Live Agent",
      onClick: e.handleLiveAgentMessage,
      requiresThread: !0
    },
    {
      id: "content-live-agent-disconnect",
      label: "☎️ Live Agent Disconnect",
      tab: "content",
      group: "Live Agent",
      onClick: e.handleLiveAgentDisconnect,
      requiresThread: !0
    },
    {
      id: "content-live-agent-send-user-message",
      label: "💬 Send LA User Message",
      tab: "content",
      group: "Live Agent",
      onClick: e.handleSendLiveAgentUserMessage,
      requiresThread: !0
    },
    // Attachments Group
    {
      id: "attachments-add-3",
      label: "📎 Add 3 Attachments",
      tab: "content",
      group: "Attachments",
      onClick: () => e.handleAddMockAttachments(3),
      requiresThread: !1
    },
    {
      id: "attachments-add-5",
      label: "📎 Add 5 Attachments",
      tab: "content",
      group: "Attachments",
      onClick: () => e.handleAddMockAttachments(5),
      requiresThread: !1
    },
    {
      id: "attachments-add-10",
      label: "📎 Add 10 Attachments",
      tab: "content",
      group: "Attachments",
      onClick: () => e.handleAddMockAttachments(10),
      requiresThread: !1
    },
    {
      id: "attachments-clear",
      label: "🗑️ Clear Attachments",
      tab: "content",
      group: "Attachments",
      onClick: e.handleClearAttachments,
      requiresThread: !1
    },
    // Charts Group
    {
      id: "chart-sales-over-time",
      label: "📈 Sales Over Time",
      tab: "content",
      group: "Charts",
      onClick: () => e.handleChartResponse("salesOverTime"),
      requiresThread: !0
    },
    {
      id: "chart-user-growth",
      label: "📈 User Growth",
      tab: "content",
      group: "Charts",
      onClick: () => e.handleChartResponse("userGrowth"),
      requiresThread: !0
    },
    {
      id: "chart-performance-metrics",
      label: "⚡ Performance Metrics",
      tab: "content",
      group: "Charts",
      onClick: () => e.handleChartResponse("performanceMetrics"),
      requiresThread: !0
    },
    {
      id: "chart-incidents-by-type",
      label: "🔧 Incidents by Type",
      tab: "content",
      group: "Charts",
      onClick: () => e.handleChartResponse("incidentsByType"),
      requiresThread: !0
    },
    {
      id: "chart-department-budget",
      label: "💰 Department Budget",
      tab: "content",
      group: "Charts",
      onClick: () => e.handleChartResponse("departmentBudget"),
      requiresThread: !0
    },
    {
      id: "chart-market-share",
      label: "🥧 Market Share (Pie)",
      tab: "content",
      group: "Charts",
      onClick: () => e.handleChartResponse("marketShare"),
      requiresThread: !0
    },
    // Calendars Group
    {
      id: "calendar-team-schedule",
      label: "📅 Team Schedule",
      tab: "content",
      group: "Calendars",
      onClick: () => e.handleCalendarResponse("teamSchedule"),
      requiresThread: !0
    },
    {
      id: "calendar-project-deadlines",
      label: "⏰ Project Deadlines",
      tab: "content",
      group: "Calendars",
      onClick: () => e.handleCalendarResponse("projectDeadlines"),
      requiresThread: !0
    },
    {
      id: "calendar-customer-meetings",
      label: "🤝 Customer Meetings",
      tab: "content",
      group: "Calendars",
      onClick: () => e.handleCalendarResponse("customerMeetings"),
      requiresThread: !0
    },
    {
      id: "calendar-company-holidays",
      label: "🎄 Company Holidays",
      tab: "content",
      group: "Calendars",
      onClick: () => e.handleCalendarResponse("companyHolidays"),
      requiresThread: !0
    },
    // Citations Group
    {
      id: "citation-multi-section-popover",
      label: "📑 Multi-Section Popover",
      tab: "content",
      group: "Citations",
      onClick: () => e.handleCitationResponse("multiSectionPopover"),
      requiresThread: !0
    },
    {
      id: "citation-all-badge-types",
      label: "🔀 All Badge Types",
      tab: "content",
      group: "Citations",
      onClick: () => e.handleCitationResponse("stackedDifferentTypes"),
      requiresThread: !0
    },
    {
      id: "citation-grouped-sources",
      label: "📚 Grouped Sources",
      tab: "content",
      group: "Citations",
      onClick: () => e.handleCitationResponse("stackedSameType"),
      requiresThread: !0
    },
    {
      id: "citation-markdown-list",
      label: "📝 Markdown + Citations",
      tab: "content",
      group: "Citations",
      onClick: () => e.handleCitationResponse("markdownListStackedCitations"),
      requiresThread: !0
    },
    {
      id: "citation-onclick-action",
      label: "⚡ With onClickAction",
      tab: "content",
      group: "Citations",
      onClick: () => e.handleCitationResponse("withOnClickAction"),
      requiresThread: !0
    },
    {
      id: "citation-streaming-markers",
      label: "🌊 Stream with Citations",
      tab: "content",
      group: "Citations",
      onClick: e.handleStreamingCitationResponse,
      requiresThread: !0
    },
    // Interactive Pages Group
    {
      id: "add-interactive-page",
      label: "📄 Add Interactive Page",
      tab: "content",
      group: "Interactive Pages",
      onClick: e.handleAddInteractivePage,
      requiresThread: !0
    },
    // ============ WIDGETS TAB ============
    // Basic Widgets Group
    {
      id: "widget-badge",
      label: "🏷️ Badge",
      tab: "widgets",
      group: "Basic",
      onClick: () => e.handleWidgetResponse(
        Y({
          label: "Info Badge",
          pill: !0,
          color: "info"
        })
      ),
      requiresThread: !0
    },
    {
      id: "widget-card-buttons",
      label: "🧩 Card with Buttons",
      tab: "widgets",
      group: "Basic",
      onClick: () => e.handleWidgetResponse(
        J({
          children: [
            N({
              direction: "row",
              gap: 8,
              children: [
                C({
                  label: "Save",
                  color: "success",
                  onClickAction: { type: "save" }
                }),
                C({
                  label: "Cancel",
                  style: "secondary",
                  onClickAction: { type: "cancel" }
                })
              ]
            })
          ]
        })
      ),
      requiresThread: !0
    },
    {
      id: "widget-carousel",
      label: "🎠 Carousel",
      tab: "widgets",
      group: "Basic",
      onClick: () => e.handleWidgetResponse(
        Na({
          size: "full",
          children: [
            Ae({
              children: [
                J({
                  children: [
                    ee({
                      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
                      alt: "Laptop on desk",
                      flush: !0
                    }),
                    I({ value: "Getting Started", size: "md" }),
                    s({
                      value: "Set up your workspace and get productive fast.",
                      size: "sm"
                    })
                  ]
                })
              ],
              onSelectAction: { type: "picker.select", payload: { value: "slide-1" } }
            }),
            Ae({
              children: [
                J({
                  children: [
                    ee({
                      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=350&fit=crop",
                      alt: "Code on screen",
                      flush: !0
                    }),
                    I({ value: "Build & Deploy", size: "md" }),
                    s({
                      value: "Write code and ship it with confidence. This slide has a taller image and more text to test height variation across slides in the carousel.",
                      size: "sm"
                    })
                  ]
                })
              ],
              onSelectAction: { type: "picker.select", payload: { value: "slide-2" } }
            }),
            Ae({
              children: [
                J({
                  children: [
                    ee({
                      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
                      alt: "Programming setup",
                      flush: !0
                    }),
                    I({ value: "Monitor & Scale", size: "md" }),
                    s({
                      value: "Track performance and grow with demand.",
                      size: "sm"
                    })
                  ]
                })
              ],
              onSelectAction: { type: "picker.select", payload: { value: "slide-3" } }
            })
          ]
        })
      ),
      requiresThread: !0
    },
    // Forms Group
    {
      id: "widget-registration-form",
      label: "📝 User Registration Form",
      tab: "widgets",
      group: "Forms",
      onClick: () => e.handleWidgetResponse(
        St({
          onSubmitAction: { type: "submit_registration" },
          children: [
            J({
              children: [
                I({
                  value: "Create Your Account",
                  size: "lg",
                  weight: "semibold"
                }),
                s({
                  value: "Fill out the form below to get started",
                  size: "sm"
                }),
                W({}),
                w({
                  children: [
                    s({
                      value: "Full Name",
                      weight: "semibold",
                      size: "sm"
                    }),
                    _e({
                      name: "fullname",
                      placeholder: "John Doe",
                      variant: "soft",
                      size: "md",
                      required: !0
                    })
                  ]
                }),
                w({
                  children: [
                    s({
                      value: "Email Address",
                      weight: "semibold",
                      size: "sm"
                    }),
                    _e({
                      name: "email",
                      placeholder: "john@example.com",
                      inputType: "email",
                      variant: "soft",
                      size: "md",
                      required: !0
                    })
                  ]
                }),
                w({
                  children: [
                    s({
                      value: "Date of Birth",
                      weight: "semibold",
                      size: "sm"
                    }),
                    Da({
                      name: "dob",
                      variant: "soft",
                      size: "md",
                      clearable: !0
                    })
                  ]
                }),
                w({
                  children: [
                    s({
                      value: "Country",
                      weight: "semibold",
                      size: "sm"
                    }),
                    Nt({
                      name: "country",
                      placeholder: "Select country",
                      variant: "soft",
                      size: "md",
                      options: [
                        { value: "us", label: "United States" },
                        { value: "uk", label: "United Kingdom" },
                        { value: "ca", label: "Canada" },
                        { value: "au", label: "Australia" },
                        { value: "de", label: "Germany" },
                        { value: "fr", label: "France" }
                      ]
                    })
                  ]
                }),
                w({
                  children: [
                    s({
                      value: "Account Type",
                      weight: "semibold",
                      size: "sm"
                    }),
                    La({
                      name: "account_type",
                      direction: "col",
                      options: [
                        { value: "personal", label: "Personal" },
                        { value: "business", label: "Business" },
                        { value: "enterprise", label: "Enterprise" }
                      ],
                      defaultValue: "personal"
                    })
                  ]
                }),
                w({
                  children: [
                    s({
                      value: "Tell us about yourself (optional)",
                      weight: "semibold",
                      size: "sm"
                    }),
                    za({
                      name: "bio",
                      placeholder: "Share a bit about yourself...",
                      variant: "soft",
                      size: "md",
                      rows: 4,
                      autoResize: !0,
                      maxRows: 8
                    })
                  ]
                }),
                he({
                  name: "newsletter",
                  label: "Subscribe to our newsletter"
                }),
                he({
                  name: "terms",
                  label: "I agree to the Terms of Service and Privacy Policy",
                  required: !0
                }),
                W({}),
                N({
                  direction: "row",
                  gap: 8,
                  children: [
                    C({
                      label: "Create Account",
                      color: "primary",
                      variant: "solid",
                      onClickAction: { type: "submit_registration" },
                      block: !0
                    }),
                    C({
                      label: "Cancel",
                      variant: "ghost",
                      onClickAction: { type: "cancel" },
                      block: !0
                    })
                  ]
                })
              ]
            })
          ]
        })
      ),
      requiresThread: !0
    },
    {
      id: "widget-multi-checkbox-form",
      label: "☑️ Multi-Checkbox Form",
      tab: "widgets",
      group: "Forms",
      onClick: () => e.handleWidgetResponse(
        St({
          onSubmitAction: { type: "select_items", payload: { widgetId: "preferences" } },
          children: [
            J({
              children: [
                I({
                  value: "Notification Preferences",
                  size: "lg",
                  weight: "semibold"
                }),
                s({
                  value: "Select all that apply:",
                  size: "sm"
                }),
                W({}),
                w({
                  gap: 8,
                  children: [
                    he({
                      name: "notifications",
                      value: "email",
                      label: "Email notifications"
                    }),
                    he({
                      name: "notifications",
                      value: "sms",
                      label: "SMS notifications"
                    }),
                    he({
                      name: "notifications",
                      value: "push",
                      label: "Push notifications"
                    }),
                    he({
                      name: "notifications",
                      value: "in_app",
                      label: "In-app notifications"
                    })
                  ]
                }),
                W({}),
                C({
                  label: "Save Preferences",
                  color: "primary",
                  variant: "solid",
                  submit: !0,
                  block: !0
                })
              ]
            })
          ]
        })
      ),
      requiresThread: !0
    },
    // Cards Group
    {
      id: "widget-approval-card",
      label: "✅ Approval Card",
      tab: "widgets",
      group: "Cards",
      onClick: () => e.handleWidgetResponse(
        J({
          size: "sm",
          children: [
            ee({
              src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop",
              alt: "New Feature Proposal",
              aspectRatio: 1.7778,
              flush: !0
            }),
            w({
              gap: 1,
              children: [
                I({
                  value: "New Feature Proposal",
                  size: "md"
                }),
                s({
                  value: "Review and approve the new dark mode feature implementation"
                })
              ]
            }),
            W(),
            _({
              children: [
                C({
                  label: "Approve",
                  style: "primary",
                  onClickAction: {
                    type: "api.request",
                    payload: {
                      method: "POST",
                      url: "/api/approvals/approve",
                      body: {
                        id: "feature-123",
                        decision: "approve"
                      }
                    }
                  }
                }),
                C({
                  label: "Reject",
                  color: "danger",
                  variant: "outline",
                  onClickAction: {
                    type: "api.request",
                    payload: {
                      method: "POST",
                      url: "/api/approvals/reject",
                      body: {
                        id: "feature-123",
                        decision: "reject"
                      }
                    }
                  }
                })
              ]
            })
          ]
        })
      ),
      requiresThread: !0
    },
    {
      id: "widget-boba-tea-cart",
      label: "🧋 Boba Tea Cart",
      tab: "widgets",
      group: "Cards",
      onClick: () => e.handleWidgetResponse(
        J({
          size: "sm",
          children: [
            w({
              children: [
                _({
                  key: "Black Sugar Hoick Latte",
                  align: "center",
                  children: [
                    ee({
                      src: "https://cdn.openai.com/API/storybook/blacksugar.png",
                      size: 48
                    }),
                    w({
                      children: [
                        s({
                          value: "Black Sugar Hoick Latte",
                          size: "md",
                          weight: "semibold"
                        }),
                        s({
                          value: "16oz Iced · Boba · $6.50",
                          size: "sm"
                        })
                      ]
                    })
                  ]
                }),
                _({
                  key: "Classic Milk Tea",
                  align: "center",
                  children: [
                    ee({
                      src: "https://cdn.openai.com/API/storybook/classic.png",
                      size: 48
                    }),
                    w({
                      children: [
                        s({
                          value: "Classic Milk Tea",
                          size: "md",
                          weight: "semibold"
                        }),
                        s({
                          value: "16oz Iced · Double Boba · $6.75",
                          size: "sm"
                        })
                      ]
                    })
                  ]
                }),
                _({
                  key: "Matcha Latte",
                  align: "center",
                  children: [
                    ee({
                      src: "https://cdn.openai.com/API/storybook/matcha.png",
                      size: 48
                    }),
                    w({
                      children: [
                        s({
                          value: "Matcha Latte",
                          size: "md",
                          weight: "semibold"
                        }),
                        s({
                          value: "16oz Iced · Boba · $6.50",
                          size: "sm"
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            W({ flush: !0 }),
            w({
              children: [
                _({
                  children: [
                    s({
                      value: "Subtotal",
                      size: "sm"
                    }),
                    oe(),
                    s({
                      value: "$19.75",
                      size: "sm"
                    })
                  ]
                }),
                _({
                  children: [
                    s({
                      value: "Sales tax (8.75%)",
                      size: "sm"
                    }),
                    oe(),
                    s({
                      value: "$1.72",
                      size: "sm"
                    })
                  ]
                }),
                _({
                  children: [
                    s({
                      value: "Total with tax",
                      weight: "semibold",
                      size: "sm"
                    }),
                    oe(),
                    s({
                      value: "$21.47",
                      weight: "semibold",
                      size: "sm"
                    })
                  ]
                })
              ]
            }),
            W({ flush: !0 }),
            w({
              children: [
                C({
                  label: "Purchase",
                  onClickAction: {
                    type: "purchase"
                  },
                  style: "primary",
                  block: !0
                }),
                C({
                  label: "Add to cart",
                  onClickAction: {
                    type: "add_to_cart"
                  },
                  style: "secondary",
                  block: !0
                })
              ]
            })
          ]
        })
      ),
      requiresThread: !0
    },
    {
      id: "widget-flight-boarding-pass",
      label: "✈️ Flight Boarding Pass",
      tab: "widgets",
      group: "Cards",
      onClick: () => e.handleWidgetResponse(
        J({
          size: "sm",
          children: [
            w({
              gap: 3,
              children: [
                _({
                  gap: 3,
                  align: "center",
                  children: [
                    N({
                      size: 28,
                      radius: "sm",
                      background: "blue-600"
                    }),
                    w({
                      gap: 0,
                      children: [
                        M({
                          value: "Thu, Dec 4, 2025",
                          color: "secondary"
                        }),
                        I({
                          value: "SFO → JFK",
                          size: "md"
                        })
                      ]
                    }),
                    oe(),
                    Y({
                      label: "Group 2",
                      color: "info"
                    })
                  ]
                }),
                W({}),
                _({
                  gap: 3,
                  children: [
                    w({
                      children: [
                        M({ value: "Passenger" }),
                        s({ value: "Alex Johnson" })
                      ]
                    }),
                    oe(),
                    w({
                      align: "end",
                      children: [
                        M({ value: "Flight" }),
                        s({ value: "CA 218" })
                      ]
                    })
                  ]
                }),
                _({
                  gap: 3,
                  children: [
                    w({
                      children: [
                        M({ value: "Board" }),
                        s({ value: "6:35 AM" })
                      ]
                    }),
                    w({
                      children: [
                        M({ value: "Gate", color: "green-700" }),
                        s({ value: "C12" })
                      ]
                    }),
                    w({
                      children: [M({ value: "Seat" }), s({ value: "12A" })]
                    }),
                    w({
                      children: [
                        M({ value: "Conf" }),
                        s({ value: "Q7X4PY" })
                      ]
                    })
                  ]
                }),
                _({
                  gap: 3,
                  align: "stretch",
                  children: [
                    w({
                      flex: 1,
                      children: [
                        M({ value: "Depart" }),
                        s({ value: "7:15 AM • San Francisco" })
                      ]
                    }),
                    w({
                      flex: 1,
                      align: "end",
                      children: [
                        M({ value: "Arrive", textAlign: "end" }),
                        s({
                          value: "3:40 PM • New York",
                          textAlign: "end"
                        })
                      ]
                    })
                  ]
                }),
                N({
                  background: "surface-secondary",
                  padding: 4,
                  radius: "md",
                  align: "center",
                  justify: "center",
                  children: [
                    j({
                      name: "square-code",
                      size: "2xl"
                    }),
                    M({
                      value: "Scan at gate",
                      color: "secondary"
                    })
                  ]
                }),
                _({
                  children: [
                    C({
                      label: "Add to calendar",
                      variant: "outline",
                      onClickAction: {
                        type: "calendar.add",
                        payload: {
                          date: "Thu, Dec 4, 2025",
                          depart: "7:15 AM",
                          from: "SFO",
                          to: "JFK"
                        }
                      }
                    }),
                    oe(),
                    C({
                      label: "View barcode",
                      iconStart: "square-code",
                      onClickAction: {
                        type: "boardingpass.show_barcode",
                        payload: {
                          value: "M1JOHNSON/ALEX CA218 SFOJFK 20251204 SEAT12A PNRQ7X4PY"
                        }
                      }
                    })
                  ]
                })
              ]
            })
          ]
        })
      ),
      requiresThread: !0
    },
    // Demos Group
    {
      id: "widget-kitchen-sink",
      label: "🎨 Kitchen Sink Demo",
      tab: "widgets",
      group: "Demos",
      onClick: () => e.handleWidgetResponse(Zn()),
      requiresThread: !0
    },
    {
      id: "widget-actions-demo",
      label: "🔧 Widget Actions Demo",
      tab: "widgets",
      group: "Demos",
      onClick: () => e.handleWidgetResponse(Ve(), "Show me the widget actions demo"),
      requiresThread: !1,
      // Handler calls ensureThreadExists() internally
      isDefaultQuickAction: !0
    },
    {
      id: "widget-list-filter-demo",
      label: "🔍 List Filter Demo",
      tab: "widgets",
      group: "Demos",
      onClick: () => e.handleWidgetResponse(ii()),
      requiresThread: !1
    },
    {
      id: "widget-map-demo",
      label: "🗺️ Map Demo",
      tab: "widgets",
      group: "Demos",
      onClick: () => e.handleWidgetResponse(bn()),
      requiresThread: !0
    },
    {
      id: "widget-search-result-demo",
      label: "🔍 Search Results Demo",
      tab: "widgets",
      onClick: () => e.handleWidgetResponse(li()),
      group: "Demos",
      requiresThread: !0
    },
    {
      id: "widget-server-defined",
      label: "📅 Server-Defined Widget",
      tab: "widgets",
      group: "Demos",
      onClick: e.handleServerDefinedWidgetDemo,
      requiresThread: !0
    },
    {
      id: "widget-interactive-view-button",
      label: "🔘 Interactive View Button",
      tab: "widgets",
      group: "Demos",
      onClick: e.handleInteractiveViewButtonDemo,
      requiresThread: !0
    },
    {
      id: "widget-aix-continue-demo",
      label: "🔁 AIX Widget Callback Demo",
      tab: "widgets",
      group: "Demos",
      onClick: e.handleAixWidgetContinueDemo,
      requiresThread: !0
    },
    {
      id: "widget-weather-greeting",
      label: "🌤️ Weather Greeting",
      tab: "widgets",
      group: "Demos",
      onClick: () => e.handleWidgetResponse(
        _({
          align: "center",
          justify: "center",
          size: "full",
          children: [
            J({
              size: "lg",
              padding: 4,
              background: "surface-elevated",
              children: [
                w({
                  gap: 4,
                  align: "center",
                  children: [
                    _({
                      gap: 4,
                      align: "center",
                      justify: "center",
                      children: [
                        w({
                          align: "center",
                          gap: 0,
                          children: [
                            s({
                              value: "Monday",
                              size: "sm",
                              weight: "semibold"
                            }),
                            M({
                              value: "December 1, 2025"
                            })
                          ]
                        }),
                        N({
                          size: 42,
                          radius: "full",
                          align: "center",
                          justify: "center",
                          background: "yellow-200",
                          children: [
                            j({
                              name: "sparkle",
                              size: "xl",
                              color: "warning"
                            })
                          ]
                        }),
                        w({
                          gap: 0,
                          children: [
                            s({
                              value: "72°",
                              size: "lg",
                              weight: "semibold"
                            }),
                            M({
                              value: "San Diego, CA"
                            })
                          ]
                        })
                      ]
                    }),
                    I({
                      value: "Good morning, Renee!",
                      size: "2xl"
                    })
                  ]
                })
              ]
            })
          ]
        })
      ),
      requiresThread: !0
    },
    {
      id: "widget-greetings-demo",
      label: "🔆 Greetings Demo",
      tab: "widgets",
      group: "Demos",
      onClick: () => e.handleWidgetResponse(Xn()),
      requiresThread: !0
    },
    // ============ EVENTS TAB ============
    // Status/Thoughts Group
    {
      id: "event-thought-analyzing",
      label: "🤔 Analyzing request...",
      tab: "events",
      group: "Status Messages",
      onClick: () => e.handleThoughtMessage("Analyzing your request..."),
      requiresThread: !0
    },
    {
      id: "event-thought-searching",
      label: "🔍 Searching database...",
      tab: "events",
      group: "Status Messages",
      onClick: () => e.handleThoughtMessage("Searching the database for matching records..."),
      requiresThread: !0
    },
    {
      id: "event-thought-executing",
      label: "🔧 Executing query...",
      tab: "events",
      group: "Status Messages",
      onClick: () => e.handleThoughtMessage("Executing database query..."),
      requiresThread: !0
    },
    {
      id: "event-thought-processing",
      label: "📊 Processing results...",
      tab: "events",
      group: "Status Messages",
      onClick: () => e.handleThoughtMessage("Processing query results..."),
      requiresThread: !0
    },
    {
      id: "event-thought-generating",
      label: "✨ Generating response...",
      tab: "events",
      group: "Status Messages",
      onClick: () => e.handleThoughtMessage("Generating response based on findings..."),
      requiresThread: !0
    },
    {
      id: "event-thought-validating",
      label: "🎯 Validating data...",
      tab: "events",
      group: "Status Messages",
      onClick: () => e.handleThoughtMessage("Validating data integrity..."),
      requiresThread: !0
    },
    {
      id: "event-show-onboarding-banner",
      label: "🆕 Show Onboarding Banner",
      tab: "events",
      group: "Status Messages",
      onClick: () => e.handleShowOnboardingBanner(),
      requiresThread: !1
    },
    // Thread Status Group
    {
      id: "event-thread-mark-unread",
      label: "📪 Mark Thread Unread",
      tab: "events",
      group: "Thread Status",
      onClick: () => e.handleThreadUpdated({ hasUnreadMessages: !0 }),
      requiresThread: !0
    },
    {
      id: "event-thread-mark-read",
      label: "📖 Mark Thread Read",
      tab: "events",
      group: "Thread Status",
      onClick: () => e.handleThreadUpdated({ hasUnreadMessages: !1 }),
      requiresThread: !0
    },
    {
      id: "event-thread-close-thread",
      label: "🚪 Close Thread",
      tab: "events",
      group: "Thread Status",
      onClick: () => e.handleThreadUpdated({ status: { type: "closed" } }),
      requiresThread: !0
    },
    {
      id: "event-thread-reopen-thread",
      label: "🔓 Reopen Thread",
      tab: "events",
      group: "Thread Status",
      onClick: () => e.handleThreadUpdated({ status: { type: "active" } }),
      requiresThread: !0
    },
    {
      id: "event-thread-mark-live-agent",
      label: "👤 Mark Thread Live Agent",
      tab: "events",
      group: "Thread Status",
      onClick: () => e.handleThreadUpdated({ liveAgentActive: !0 }),
      requiresThread: !0
    },
    {
      id: "event-thread-mark-not-live-agent",
      label: "📴 Agent Not Live",
      tab: "events",
      group: "Thread Status",
      onClick: () => e.handleThreadUpdated({ liveAgentActive: !1 }),
      requiresThread: !0
    },
    // Flows Group
    {
      id: "event-complex-flow",
      label: "🎬 Complex Execution Flow",
      tab: "events",
      group: "Flows",
      onClick: e.handleComplexExecutionFlow,
      requiresThread: !1
    },
    {
      id: "event-client-tool-call",
      label: "🛠️ Client Tool Call",
      group: "Flows",
      tab: "events",
      onClick: e.handleClientToolCall,
      requiresThread: !1
    },
    // AIEL Client Tool Simulation
    {
      id: "aiel-show-alert",
      label: "🔔 AIEL: Show Alert",
      group: "AIEL Simulation",
      tab: "events",
      onClick: () => e.handleAIELClientTool("show-alert", { message: "Hello from AIEL simulation!" }),
      requiresThread: !1
    },
    {
      id: "aiel-update-counter",
      label: "🔢 AIEL: Update Counter",
      group: "AIEL Simulation",
      tab: "events",
      onClick: () => e.handleAIELClientTool("update-counter", { increment: 5 }),
      requiresThread: !1
    },
    {
      id: "aiel-toggle-theme",
      label: "🎨 AIEL: Toggle Theme",
      group: "AIEL Simulation",
      tab: "events",
      onClick: () => e.handleAIELClientTool("toggle-theme", {}),
      requiresThread: !1
    },
    {
      id: "aiel-filter-list-p1",
      label: "🔍 AIEL: Filter List (P1)",
      group: "AIEL Simulation",
      tab: "events",
      onClick: () => e.handleAIELClientTool("listitems.filter", {
        targetId: et,
        field: "priority",
        value: "P1"
      }),
      requiresThread: !1
    },
    {
      id: "aiel-filter-list-all",
      label: "🔍 AIEL: Filter List (All)",
      group: "AIEL Simulation",
      tab: "events",
      onClick: () => e.handleAIELClientTool("listitems.filter", {
        targetId: et,
        field: "priority",
        value: "all"
      }),
      requiresThread: !1
    },
    {
      id: "aiel-map-highlight-on",
      label: "📍 AIEL: Highlight Marker",
      group: "AIEL Simulation",
      tab: "events",
      onClick: () => e.handleAIELClientTool("map.highlight-marker", {
        targetId: Fe,
        markerId: "yard-house",
        highlighted: !0
      }),
      requiresThread: !1
    },
    {
      id: "aiel-map-highlight-off",
      label: "📍 AIEL: Unhighlight Marker",
      group: "AIEL Simulation",
      tab: "events",
      onClick: () => e.handleAIELClientTool("map.highlight-marker", {
        targetId: Fe,
        markerId: "yard-house",
        highlighted: !1
      }),
      requiresThread: !1
    },
    // Server → AIEL Flow Testing
    {
      id: "server-aiel-show-alert",
      label: "📡 Server→AIEL: Show Alert",
      group: "Server → AIEL Flow",
      tab: "events",
      onClick: () => e.handleServerToAIELClientTool(ge, "show-alert", {
        message: "Alert from server via AIEL!"
      }),
      requiresThread: !0
    },
    {
      id: "server-aiel-update-counter",
      label: "📡 Server→AIEL: Update Counter",
      group: "Server → AIEL Flow",
      tab: "events",
      onClick: () => e.handleServerToAIELClientTool(ge, "update-counter", {
        increment: 10
      }),
      requiresThread: !0
    },
    {
      id: "server-aiel-external-widget",
      label: "📡 Server→AIEL: External Widget",
      group: "Server → AIEL Flow",
      tab: "events",
      onClick: () => e.handleServerToAIELClientTool("external-widget-123", "external-action", {
        data: "This should route to AIEL for external widgets"
      }),
      requiresThread: !0
    },
    {
      id: "server-aiel-map-highlight",
      label: "📡 Server→AIEL: Map Highlight",
      group: "Server → AIEL Flow",
      tab: "events",
      onClick: () => e.handleServerToAIELClientTool(Fe, "map.highlight-marker", {
        targetId: Fe,
        markerId: "yard-house",
        highlighted: !0
      }),
      requiresThread: !0
    },
    // Server Action as Client Tool Testing
    // These simulate OGCS invoking a server-defined widget action that was
    // discovered by useServerActionRegistration and registered in the ClientToolsRegistry.
    // Each button auto-renders the Widget Actions Demo first, waits for
    // useServerActionRegistration to fire, then invokes the tool call.
    {
      id: "server-action-refresh-data",
      label: "📡 Server Action→Client: Refresh Data",
      description: "Renders Widget Actions Demo, then invokes refresh-data via ClientToolsRegistry",
      group: "Server Action as Client Tool",
      tab: "events",
      onClick: async () => {
        await e.handleWidgetThenToolCall(Ve(), bt, {
          widgetId: ge,
          actionType: "refresh-data",
          args: { source: "llm-invoked", timestamp: Date.now() }
        });
      },
      requiresThread: !1
    },
    {
      id: "server-action-submit-form",
      label: "📡 Server Action→Client: Submit Form",
      description: "Renders Widget Actions Demo, then invokes submit-form via ClientToolsRegistry",
      group: "Server Action as Client Tool",
      tab: "events",
      onClick: async () => {
        await e.handleWidgetThenToolCall(Ve(), bt, {
          widgetId: ge,
          actionType: "submit-form",
          args: { formId: "demo-form", values: { name: "LLM-submitted" } }
        });
      },
      requiresThread: !1
    },
    {
      id: "server-action-default",
      label: "📡 Server Action→Client: Default Action",
      description: "Renders Widget Actions Demo, then invokes default-action via ClientToolsRegistry",
      group: "Server Action as Client Tool",
      tab: "events",
      onClick: async () => {
        await e.handleWidgetThenToolCall(Ve(), bt, {
          widgetId: ge,
          actionType: "default-action",
          args: { info: "Invoked by LLM via ClientToolsRegistry" }
        });
      },
      requiresThread: !1
    },
    {
      id: "server-builtin-geolocation",
      label: "📡 Server→Client: Geolocation",
      group: "Built-in Client Tools",
      tab: "events",
      onClick: () => e.handleServerBuiltInClientTool("geolocation.get_position"),
      requiresThread: !0
    },
    // Skill Execution Group
    // Skill sys_ids come from the sys_gen_ai_skill table on the instance.
    // To find valid skills: navigate to sys_gen_ai_skill.list in your instance.
    {
      // https://qnaaia1.service-now.com/sys_gen_ai_skill.do?sys_id=2fa9662a1bb83110f9ddb888cc4bcbab
      id: "skill-summarize-record",
      label: "🛠️ Skill: Summarize Record",
      group: "Skill Execution",
      tab: "events",
      // sys_gen_ai_skill: "Summarize a record" (2fa9662a1bb83110f9ddb888cc4bcbab)
      onClick: () => e.handleSkillExecution("2fa9662a1bb83110f9ddb888cc4bcbab", {
        task_table: "incident"
      }),
      requiresThread: !1
    },
    {
      // https://qnaaia1.service-now.com/sys_gen_ai_skill.do?sys_id=2fa9662a1bb83110f9ddb888cc4bcbab
      id: "skill-investigate-problems",
      label: "🛠️ Skill: Investigate Problems",
      group: "Skill Execution",
      tab: "events",
      // sys_gen_ai_skill: "Investigate problems" (0030ff29f8d7409899b39c4c99ee1bf9)
      onClick: () => e.handleSkillExecution("0030ff29f8d7409899b39c4c99ee1bf9"),
      requiresThread: !1
    },
    // Search Transfer Group
    // Simulates the "Ask a follow-up" flow from Platform Analytics search results.
    // Sets newConversationContext on the web component, exactly as the host platform does.
    {
      id: "search-transfer-followup",
      label: "🔍 Search: Ask a Follow-up",
      description: 'Simulates clicking "Ask a follow-up" from search results (followup intention)',
      group: "Search Transfer",
      tab: "events",
      onClick: () => e.handleSearchTransfer("followup"),
      requiresThread: !1
    },
    {
      id: "search-transfer-search",
      label: "🔍 Search: New Query",
      description: 'Simulates a search transfer with "search" intention (routes utterance to AO)',
      group: "Search Transfer",
      tab: "events",
      onClick: () => e.handleSearchTransfer("search"),
      requiresThread: !1
    },
    {
      id: "search-transfer-execute",
      label: "🔍 Search: Execute Item",
      description: "Simulates selecting a catalog item from search results (execute intention)",
      group: "Search Transfer",
      tab: "events",
      onClick: () => e.handleSearchTransfer("execute"),
      requiresThread: !1
    },
    // OAuth Flow
    {
      id: "event-oauth-login",
      label: "🔐 OAuth Login (Initial)",
      group: "Flows",
      tab: "events",
      onClick: () => e.handleWidgetResponse(
        J({
          size: "sm",
          children: [
            w({
              gap: 4,
              children: [
                _({
                  gap: 3,
                  align: "center",
                  children: [
                    j({ name: "keys", size: "xl", color: "warning" }),
                    I({
                      value: "Authentication Required",
                      size: "md"
                    })
                  ]
                }),
                s({
                  value: "To access your Salesforce data, you need to log in. This will open a new window where you can authorize access.",
                  size: "sm"
                }),
                C({
                  label: "Log in to Salesforce",
                  iconStart: "external-link",
                  color: "primary",
                  variant: "solid",
                  block: !0,
                  onClickAction: {
                    type: "oauth.login",
                    handler: "client",
                    payload: {
                      url: "https://test.example.com/oauth_initiator.do?response_type=code&client_id=test",
                      messageId: "test-message-id-123"
                    }
                  }
                })
              ]
            })
          ]
        })
      ),
      requiresThread: !0
    },
    {
      id: "event-oauth-success",
      label: "🔐 OAuth Login (Success)",
      group: "Flows",
      tab: "events",
      onClick: () => e.handleWidgetResponse(
        J({
          size: "sm",
          children: [
            w({
              gap: 4,
              children: [
                _({
                  gap: 3,
                  align: "center",
                  children: [
                    j({ name: "keys", size: "xl", color: "success" }),
                    I({
                      value: "Access Granted",
                      size: "md"
                    })
                  ]
                }),
                s({
                  value: "You have successfully logged in to Salesforce. Continuing with your request.",
                  size: "sm"
                }),
                C({
                  label: "Logged in",
                  iconStart: "keys",
                  color: "success",
                  variant: "soft",
                  block: !0,
                  disabled: !0
                })
              ]
            })
          ]
        })
      ),
      requiresThread: !0
    },
    {
      id: "event-oauth-error",
      label: "🔐 OAuth Login (Error)",
      group: "Flows",
      tab: "events",
      onClick: () => e.handleWidgetResponse(
        J({
          size: "sm",
          children: [
            w({
              gap: 4,
              children: [
                _({
                  gap: 3,
                  align: "center",
                  children: [
                    j({ name: "keys", size: "xl", color: "danger" }),
                    I({
                      value: "Authentication Failed",
                      size: "md"
                    })
                  ]
                }),
                s({
                  value: "Unable to complete authentication. The login window was closed before authorization was granted, or the session timed out.",
                  size: "sm"
                }),
                C({
                  label: "Try again",
                  iconStart: "external-link",
                  color: "danger",
                  variant: "outline",
                  block: !0,
                  onClickAction: {
                    type: "oauth.login",
                    handler: "client",
                    payload: {
                      url: "https://test.example.com/oauth_initiator.do?response_type=code&client_id=test",
                      messageId: "test-message-id-123"
                    }
                  }
                })
              ]
            })
          ]
        })
      ),
      requiresThread: !0
    },
    // Utilities
    {
      id: "clear-persisted-threads",
      label: "🗑️ Clear Persisted Threads",
      group: "Utilities",
      tab: "events",
      onClick: e.handleClearPersistedThreads,
      requiresThread: !1
    }
  ];
}
const ua = "testHarness.actionUsageCounts";
function ri() {
  const [e, a] = L(() => xt.getItemJSON(ua) ?? {}), n = h((o) => {
    a((r) => {
      const i = {
        ...r,
        [o]: (r[o] ?? 0) + 1
      };
      return xt.setItemJSON(ua, i), i;
    });
  }, []), l = h(
    (o) => e[o] ?? 0,
    [e]
  );
  return {
    usageCounts: e,
    incrementUsage: n,
    getUsageCount: l
  };
}
function Oa(e) {
  return ve(() => e >= fn ? "wide" : "narrow", [e]);
}
function se(e) {
  const a = e.current?.getRootNode();
  if (!(a instanceof ShadowRoot))
    return null;
  const n = a.host;
  return n instanceof HTMLElement ? n : null;
}
function Pe(e, a, n) {
  const l = h(() => n?.(), [n]);
  H(() => {
    if (!a || !n)
      return;
    const o = se(e);
    if (o)
      return o.addEventListener(a, l), () => {
        o.removeEventListener(a, l);
      };
  }, [a, n, l, e]);
}
function _t(e, a, n) {
  H(() => {
    const l = se(e);
    l && (n ? l.setAttribute(a, "true") : l.removeAttribute(a));
  }, [a, n, e]);
}
function $(e) {
  const { attribute: a, initialValue: n, eventName: l, onEvent: o } = e, [r, i] = L(n), { rootRef: p } = we();
  return _t(p, a, r), Pe(p, l, o), { value: r, setValue: i };
}
function si(e) {
  const { attribute: a, initialValue: n, eventName: l, onEvent: o } = e, [r, i] = L(n), { rootRef: p } = we();
  return H(() => {
    const g = se(p);
    g && g.setAttribute(a, r);
  }, [a, r, p]), Pe(p, l, o), { value: r, setValue: i };
}
function di(e) {
  const { managedAttribute: a, valueAttribute: n, toggleEventName: l } = e, { rootRef: o } = we(), [r, i] = L(!1), [p, g] = L(!1);
  _t(o, a, r), _t(o, n, p);
  const v = h(() => {
    console.log(`[Test Harness] ${l} event received`), g((c) => !c);
  }, [l]);
  return Pe(o, r ? l : void 0, v), { isManaged: r, setIsManaged: i, value: p, setValue: g };
}
function ci(e) {
  const { attribute: a, initialValue: n, eventName: l, onEvent: o } = e, [r, i] = L(n), { rootRef: p } = we();
  return H(() => {
    const g = se(p);
    g && g.setAttribute(a, JSON.stringify(r));
  }, [a, r, p]), Pe(p, l, o), { value: r, setValue: i };
}
function pa(e, a) {
  const { rootRef: n } = we();
  Pe(n, e, a);
}
function ui() {
  const e = di({
    managedAttribute: "left-sidebar-opened-managed",
    valueAttribute: "left-sidebar-opened",
    toggleEventName: "left-sidebar:toggle-requested"
  }), { value: a, setValue: n } = $({
    attribute: "show-view-toggle-button",
    initialValue: !1
  }), { value: l, setValue: o } = $({
    attribute: "view-expanded",
    initialValue: !1
  }), { value: r, setValue: i } = $({
    attribute: "show-close-button",
    initialValue: !1
  }), { value: p, setValue: g } = $({
    attribute: "show-history-button",
    initialValue: !0
  }), { value: v, setValue: c } = $({
    attribute: "show-conversation-title",
    initialValue: !0
  }), { value: A, setValue: y } = $({
    attribute: "always-show-first-utterance",
    initialValue: !1
  }), { value: S, setValue: O } = $({
    attribute: "show-promoted-topics",
    initialValue: !1
  }), { value: R, setValue: k } = $({
    attribute: "input-only",
    initialValue: !1
  }), { value: V, setValue: f } = si({
    attribute: "input-layout",
    initialValue: "auto"
  }), { value: x, setValue: T } = $({
    attribute: "show-chat-panel-toggle",
    initialValue: !1
  }), { value: B, setValue: q } = $({
    attribute: "enable-pinnable",
    initialValue: !1
  }), { value: F, setValue: z } = $({
    attribute: "read-only",
    initialValue: !1
  }), { value: P, setValue: K } = $({
    attribute: "hide-new-chat-on-closed",
    initialValue: !1
  }), { value: te, setValue: le } = $({
    attribute: "enable-page-history",
    initialValue: !0
  }), { value: de, setValue: ce } = $({
    attribute: "enable-intro-banner",
    initialValue: !1
  }), { value: Ee, setValue: Re } = ci({
    attribute: "branding",
    initialValue: { backButtonIcon: "back" }
  });
  return pa("view-toggle:clicked", () => {
    console.log("[Test Harness] view-toggle:clicked event received");
  }), pa("close-button:clicked", () => {
    console.log("[Test Harness] close-button:clicked event received");
  }), {
    leftSidebar: e,
    branding: Ee,
    setBranding: Re,
    showViewToggleButton: a,
    setShowViewToggleButton: n,
    viewExpanded: l,
    setViewExpanded: o,
    showCloseButton: r,
    setShowCloseButton: i,
    showHistoryButton: p,
    setShowHistoryButton: g,
    showConversationTitle: v,
    setShowConversationTitle: c,
    alwaysShowFirstUtterance: A,
    setAlwaysShowFirstUtterance: y,
    showPromotedTopics: S,
    setShowPromotedTopics: O,
    inputOnly: R,
    setInputOnly: k,
    inputLayout: V,
    setInputLayout: f,
    showChatPanelToggle: x,
    setShowChatPanelToggle: T,
    enablePinnable: B,
    setEnablePinnable: q,
    readOnly: F,
    setReadOnly: z,
    hideNewChatOnClosed: P,
    setHideNewChatOnClosed: K,
    enablePageHistory: te,
    setEnablePageHistory: le,
    enableIntroBanner: de,
    setEnableIntroBanner: ce
  };
}
const ha = "SHOW_INTERACTIVE_VIEW", ft = "CLOSE_INTERACTIVE_VIEW", pi = `
	position: fixed;
	top: 0;
	right: 0;
	width: 50vw;
	height: 100vh;
	background: white;
	border-left: 2px solid #e0e0e0;
	box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
	z-index: 10000;
	overflow: auto;
	padding: 16px;
`, hi = `
	position: absolute;
	top: 8px;
	right: 8px;
	background: #f5f5f5;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 4px 12px;
	cursor: pointer;
	font-size: 13px;
`, gi = `
	font-size: 13px;
	color: #666;
	margin-bottom: 12px;
	padding-bottom: 8px;
	border-bottom: 1px solid #eee;
`, mi = (e) => {
  const a = X(null), n = h(() => {
    a.current && (a.current.remove(), a.current = null);
  }, []), l = h(
    (o) => {
      n(), re("InteractiveViewPanel", "Opening panel for:", o.type);
      const r = document.createElement("div");
      r.style.cssText = pi;
      const i = document.createElement("div");
      i.style.cssText = gi, i.textContent = `Interactive View: ${o.type}`, r.appendChild(i);
      const p = document.createElement("button");
      p.style.cssText = hi, p.textContent = "Close", p.addEventListener("click", () => {
        n(), e.current?.dispatchEvent(
          new CustomEvent(ft, { bubbles: !0, composed: !0 })
        );
      }), r.appendChild(p);
      const g = document.createElement("div");
      if (g.style.cssText = "margin-top: 8px;", r.appendChild(g), document.body.appendChild(r), a.current = r, o.renderCallback && o.widgetData)
        Promise.resolve(o.renderCallback(g, o.widgetData));
      else {
        const v = document.createElement("pre");
        v.style.cssText = "font-size: 12px; white-space: pre-wrap; word-break: break-all;", v.textContent = JSON.stringify(o, null, 2), g.appendChild(v);
      }
    },
    [n, e]
  );
  H(() => {
    const o = e.current;
    if (!o)
      return;
    const r = (p) => {
      const g = p.detail;
      l(g);
    }, i = () => {
      n();
    };
    return o.addEventListener(ha, r), o.addEventListener(ft, i), re("InteractiveViewPanel", "Listening for interactive view events on root element"), () => {
      o.removeEventListener(ha, r), o.removeEventListener(ft, i), n();
    };
  }, [e, l, n]);
};
var pe = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.North = 1] = "North", e[e.South = 2] = "South", e[e.East = 4] = "East", e[e.West = 8] = "West", e[e.NorthEast = 5] = "NorthEast", e[e.NorthWest = 9] = "NorthWest", e[e.SouthEast = 6] = "SouthEast", e[e.SouthWest = 10] = "SouthWest", e))(pe || {});
function bi({
  minWidth: e,
  minHeight: a,
  startingTargetBounds: n,
  onPositionOrSizeChange: l
}) {
  const [o, r] = L(!1), [i, p] = L(!1), [g, v] = L(
    0
    /* None */
  ), c = X({
    current: { x: 0, y: 0 },
    initial: { x: 0, y: 0 }
  }), A = X({
    current: { x: 0, y: 0 },
    initialSize: { width: 0, height: 0 },
    initialPosition: { x: 0, y: 0 }
  }), y = X(null);
  return H(() => {
    if (!o)
      return;
    const R = (V) => {
      const f = c.current, x = V.clientX - f.current.x, T = V.clientY - f.current.y, B = At({
        x: f.initial.x + x,
        y: f.initial.y + T,
        width: n.width,
        height: n.height,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
      l({
        ...n,
        x: B.x,
        y: B.y
      });
    }, k = () => {
      r(!1);
    };
    return document.addEventListener("mousemove", R), document.addEventListener("mouseup", k), () => {
      document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", k);
    };
  }, [o, n, l]), H(() => {
    if (!i || g === 0)
      return;
    const R = (V) => {
      const f = A.current, x = V.clientX - f.current.x, T = V.clientY - f.current.y;
      let B = n.width, q = n.height, F = n.x, z = n.y;
      if (g & 4 && (B = Math.max(e, f.initialSize.width + x)), g & 8) {
        const P = f.initialSize.width - e, K = Math.min(x, P);
        B = Math.max(e, f.initialSize.width - K), F = f.initialPosition.x + K;
      }
      if (g & 2 && (q = Math.max(a, f.initialSize.height + T)), g & 1) {
        const P = f.initialSize.height - a, K = Math.min(T, P);
        q = Math.max(
          a,
          f.initialSize.height - K
        ), z = f.initialPosition.y + K;
      }
      l({
        x: F,
        y: z,
        width: B,
        height: q
      });
    }, k = () => {
      p(!1), v(
        0
        /* None */
      );
    };
    return document.addEventListener("mousemove", R), document.addEventListener("mouseup", k), () => {
      document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", k);
    };
  }, [
    i,
    g,
    n,
    e,
    a,
    l
  ]), {
    isDragging: o,
    isResizing: i,
    resizeDirection: g,
    targetContainerRef: y,
    onDragStart: (R) => {
      i || (r(!0), c.current = {
        current: { x: R.clientX, y: R.clientY },
        initial: { x: n.x, y: n.y }
      });
    },
    onResizeStart: (R) => (k) => {
      k.stopPropagation(), p(!0), v(R), A.current = {
        current: { x: k.clientX, y: k.clientY },
        initialSize: { width: n.width, height: n.height },
        initialPosition: { x: n.x, y: n.y }
      };
    }
  };
}
const fi = /* @__PURE__ */ JSON.parse('{"exact_match":{"term":"KB0083903","search_results":[{"label":"KCS Article","term":"KB0083903","limit":1,"page":1,"sys_id":"","record_count":1,"records":[{"table":"kb_template_kcs_article","data":{"number":{"display":"KB0083903","value":"KB0083903"},"sys_id":{"display":"37ad6808c3ef0614e420579eb00131a3","value":"37ad6808c3ef0614e420579eb00131a3"},"sys_updated_on":{"display":"2026-03-06 20:14:47","value":"2026-03-07 04:14:47"},"kb_category":{"display":"","value":"da5039fe13ad6240a5e739fed144b042"}},"matched_attachments":[],"metadata":{"description":"Territory are not updated automatically when there is any update in SURF. Icertis CLM Production Pre-Requisite 1: Verify territory Names, attributes, and reassigned Person details from SURF. Pre-Requisite 2: Need to get the approval from CLM Icertis BSA to processed with the change. After getting the approval, follow the steps mention below. Step 1...","thumbnail_url":"","additional_info":{},"title":"Master Data update - Territory Master"},"sys_id":"37ad6808c3ef0614e420579eb00131a3","record_class_name":"kb_template_kcs_article","record_url":"kb_view.do?sysparm_article=KB0083903"}],"fields":[{"label":"Category","name":"kb_category","reference":"kb_category","type":"reference","max_length":32,"label_plural":"Categories"},{"label":"Number","name":"number","type":"string","max_length":40,"label_plural":"Numbers"},{"label":"Updated","name":"sys_updated_on","type":"glide_date_time","max_length":40,"label_plural":"Updated"},{"label":"Sys ID","name":"sys_id","type":"GUID","max_length":32,"label_plural":"Sys IDs"}],"query":"sys_id=37ad6808c3ef0614e420579eb00131a3"}],"result_count":1},"suggestions":[{"records":[{"columns":[{"fieldName":"name","label":"name","displayValue":"age","value":"age"}],"type":"USER_SEARCH_TERM"},{"columns":[{"fieldName":"name","label":"name","displayValue":"create outage","value":"create outage"}],"type":"USER_HISTORY_AND_CLICK"}],"name":"Recently viewed"},{"records":[{"columns":[{"fieldName":"name","label":"name","displayValue":"age","value":"age"}],"type":"USER_SEARCH_TERM"},{"columns":[{"fieldName":"name","label":"name","displayValue":"create outage","value":"create outage"}],"type":"USER_HISTORY_AND_CLICK"}],"name":"Recently viewed"},{"records":[{"columns":[{"fieldName":"name","label":"name","displayValue":"Virtual <highlight>Agent</highlight> Essentials","value":"Virtual <highlight>Agent</highlight> Essentials"},{"fieldName":"source_table_name","label":"source_table_name","displayValue":"Knowledge","value":"Knowledge"},{"fieldName":"sys_id","label":"sys_id","displayValue":"04be245b476f3550a41f5342846d436b","value":"04be245b476f3550a41f5342846d436b"},{"fieldName":"number","label":"number","displayValue":"KB0076368","value":"KB0076368"},{"fieldName":"document_type_id","label":"document_type_id","displayValue":"GLIDE_RECORD","value":"GLIDE_RECORD"},{"fieldName":"file_extension_id","label":"file_extension_id"},{"fieldName":"parenttitle","label":"parenttitle"},{"fieldName":"parentsysid_id","label":"parentsysid_id"},{"fieldName":"search_source_label","label":"search_source_label","displayValue":"Q&A Knowledge","value":"Q&A Knowledge"},{"fieldName":"url","label":"url","displayValue":"/kb_view.do?sys_kb_id=04be245b476f3550a41f5342846d436b","value":"/kb_view.do?sys_kb_id=04be245b476f3550a41f5342846d436b"},{"fieldName":"table","label":"table","displayValue":"kb_knowledge","value":"kb_knowledge"},{"fieldName":"parentsysid_id","label":"parentsysid_id"},{"label":"sub_hint","fieldName":"sub_hint","value":"Knowledge article hint","displayValue":"Knowledge article hint"}],"type":"QUERY_CONTENT"},{"columns":[{"fieldName":"name","label":"name","displayValue":"Virtual <highlight>Agent</highlight> Optimize","value":"Virtual <highlight>Agent</highlight> Optimize"},{"fieldName":"source_table_name","label":"source_table_name","displayValue":"Knowledge","value":"Knowledge"},{"fieldName":"sys_id","label":"sys_id","displayValue":"c34d62f5970dc250c0d7d924a253afc5","value":"c34d62f5970dc250c0d7d924a253afc5"},{"fieldName":"number","label":"number","displayValue":"KB0076376","value":"KB0076376"},{"fieldName":"document_type_id","label":"document_type_id","displayValue":"GLIDE_RECORD","value":"GLIDE_RECORD"},{"fieldName":"file_extension_id","label":"file_extension_id"},{"fieldName":"parenttitle","label":"parenttitle"},{"fieldName":"parentsysid_id","label":"parentsysid_id"},{"fieldName":"search_source_label","label":"search_source_label","displayValue":"Q&A Knowledge","value":"Q&A Knowledge"},{"fieldName":"url","label":"url","displayValue":"/kb_view.do?sys_kb_id=c34d62f5970dc250c0d7d924a253afc5","value":"/kb_view.do?sys_kb_id=c34d62f5970dc250c0d7d924a253afc5"},{"fieldName":"table","label":"table","displayValue":"kb_knowledge","value":"kb_knowledge"},{"fieldName":"parentsysid_id","label":"parentsysid_id"}],"type":"QUERY_CONTENT"},{"columns":[{"fieldName":"name","label":"name","displayValue":"Recruitment <highlight>agency</highlight> policy","value":"Recruitment <highlight>agency</highlight> policy"},{"fieldName":"source_table_name","label":"source_table_name","displayValue":"Knowledge","value":"Knowledge"},{"fieldName":"sys_id","label":"sys_id","displayValue":"fbae3f4f478a86906c31b625126d43c5","value":"fbae3f4f478a86906c31b625126d43c5"},{"fieldName":"number","label":"number","displayValue":"KB0052648","value":"KB0052648"},{"fieldName":"document_type_id","label":"document_type_id","displayValue":"GLIDE_RECORD","value":"GLIDE_RECORD"},{"fieldName":"file_extension_id","label":"file_extension_id"},{"fieldName":"parenttitle","label":"parenttitle"},{"fieldName":"parentsysid_id","label":"parentsysid_id"},{"fieldName":"search_source_label","label":"search_source_label","displayValue":"Q&A Knowledge","value":"Q&A Knowledge"},{"fieldName":"url","label":"url","displayValue":"/kb_view.do?sys_kb_id=fbae3f4f478a86906c31b625126d43c5","value":"/kb_view.do?sys_kb_id=fbae3f4f478a86906c31b625126d43c5"},{"fieldName":"table","label":"table","displayValue":"kb_knowledge","value":"kb_knowledge"},{"fieldName":"parentsysid_id","label":"parentsysid_id"}],"type":"QUERY_CONTENT"},{"columns":[{"fieldName":"name","label":"name","displayValue":"Transferencia a <highlight>Agente</highlight> (Video)","value":"Transferencia a <highlight>Agente</highlight> (Video)"},{"fieldName":"source_table_name","label":"source_table_name","displayValue":"Knowledge","value":"Knowledge"},{"fieldName":"sys_id","label":"sys_id","displayValue":"f6aacb9e97a04610c240d714a253aff7","value":"f6aacb9e97a04610c240d714a253aff7"},{"fieldName":"number","label":"number","displayValue":"KB0081302","value":"KB0081302"},{"fieldName":"document_type_id","label":"document_type_id","displayValue":"GLIDE_RECORD","value":"GLIDE_RECORD"},{"fieldName":"file_extension_id","label":"file_extension_id"},{"fieldName":"parenttitle","label":"parenttitle"},{"fieldName":"parentsysid_id","label":"parentsysid_id"},{"fieldName":"search_source_label","label":"search_source_label","displayValue":"Q&A Knowledge","value":"Q&A Knowledge"},{"fieldName":"url","label":"url","displayValue":"/kb_view.do?sys_kb_id=f6aacb9e97a04610c240d714a253aff7","value":"/kb_view.do?sys_kb_id=f6aacb9e97a04610c240d714a253aff7"},{"fieldName":"table","label":"table","displayValue":"kb_knowledge","value":"kb_knowledge"},{"fieldName":"parentsysid_id","label":"parentsysid_id"}],"type":"QUERY_CONTENT"},{"columns":[{"fieldName":"name","label":"name","displayValue":"Tenable - Nessus <highlight>agent</highlight> troubleshooting issues guide(Mac&Windows) endpoints","value":"Tenable - Nessus <highlight>agent</highlight> troubleshooting issues guide(Mac&Windows) endpoints"},{"fieldName":"source_table_name","label":"source_table_name","displayValue":"Knowledge","value":"Knowledge"},{"fieldName":"sys_id","label":"sys_id","displayValue":"39464b7147820690498cc044846d430a","value":"39464b7147820690498cc044846d430a"},{"fieldName":"number","label":"number","displayValue":"KB0078185","value":"KB0078185"},{"fieldName":"document_type_id","label":"document_type_id","displayValue":"GLIDE_RECORD","value":"GLIDE_RECORD"},{"fieldName":"file_extension_id","label":"file_extension_id"},{"fieldName":"parenttitle","label":"parenttitle"},{"fieldName":"parentsysid_id","label":"parentsysid_id"},{"fieldName":"search_source_label","label":"search_source_label","displayValue":"Q&A Knowledge","value":"Q&A Knowledge"},{"fieldName":"url","label":"url","displayValue":"/kb_view.do?sys_kb_id=39464b7147820690498cc044846d430a","value":"/kb_view.do?sys_kb_id=39464b7147820690498cc044846d430a"},{"fieldName":"table","label":"table","displayValue":"kb_knowledge","value":"kb_knowledge"},{"fieldName":"parentsysid_id","label":"parentsysid_id"}],"type":"QUERY_CONTENT"}],"name":"Suggested"},{"records":[{"columns":[{"fieldName":"name","label":"name","displayValue":"Virtual <highlight>Agent</highlight> Essentials","value":"Virtual <highlight>Agent</highlight> Essentials"},{"fieldName":"source_table_name","label":"source_table_name","displayValue":"Knowledge","value":"Knowledge"},{"fieldName":"sys_id","label":"sys_id","displayValue":"04be245b476f3550a41f5342846d436b","value":"04be245b476f3550a41f5342846d436b"},{"fieldName":"number","label":"number","displayValue":"KB0076368","value":"KB0076368"},{"fieldName":"document_type_id","label":"document_type_id","displayValue":"GLIDE_RECORD","value":"GLIDE_RECORD"},{"fieldName":"file_extension_id","label":"file_extension_id"},{"fieldName":"parenttitle","label":"parenttitle"},{"fieldName":"parentsysid_id","label":"parentsysid_id"},{"fieldName":"search_source_label","label":"search_source_label","displayValue":"Q&A Knowledge","value":"Q&A Knowledge"},{"fieldName":"url","label":"url","displayValue":"/kb_view.do?sys_kb_id=04be245b476f3550a41f5342846d436b","value":"/kb_view.do?sys_kb_id=04be245b476f3550a41f5342846d436b"},{"fieldName":"table","label":"table","displayValue":"kb_knowledge","value":"kb_knowledge"},{"fieldName":"parentsysid_id","label":"parentsysid_id"},{"label":"sub_hint","fieldName":"sub_hint","value":"Knowledge article hint","displayValue":"Knowledge article hint"}],"type":"QUERY_CONTENT"},{"columns":[{"fieldName":"name","label":"name","displayValue":"Virtual <highlight>Agent</highlight> Optimize","value":"Virtual <highlight>Agent</highlight> Optimize"},{"fieldName":"source_table_name","label":"source_table_name","displayValue":"Knowledge","value":"Knowledge"},{"fieldName":"sys_id","label":"sys_id","displayValue":"c34d62f5970dc250c0d7d924a253afc5","value":"c34d62f5970dc250c0d7d924a253afc5"},{"fieldName":"number","label":"number","displayValue":"KB0076376","value":"KB0076376"},{"fieldName":"document_type_id","label":"document_type_id","displayValue":"GLIDE_RECORD","value":"GLIDE_RECORD"},{"fieldName":"file_extension_id","label":"file_extension_id"},{"fieldName":"parenttitle","label":"parenttitle"},{"fieldName":"parentsysid_id","label":"parentsysid_id"},{"fieldName":"search_source_label","label":"search_source_label","displayValue":"Q&A Knowledge","value":"Q&A Knowledge"},{"fieldName":"url","label":"url","displayValue":"/kb_view.do?sys_kb_id=c34d62f5970dc250c0d7d924a253afc5","value":"/kb_view.do?sys_kb_id=c34d62f5970dc250c0d7d924a253afc5"},{"fieldName":"table","label":"table","displayValue":"kb_knowledge","value":"kb_knowledge"},{"fieldName":"parentsysid_id","label":"parentsysid_id"}],"type":"QUERY_CONTENT"},{"columns":[{"fieldName":"name","label":"name","displayValue":"Recruitment <highlight>agency</highlight> policy","value":"Recruitment <highlight>agency</highlight> policy"},{"fieldName":"source_table_name","label":"source_table_name","displayValue":"Knowledge","value":"Knowledge"},{"fieldName":"sys_id","label":"sys_id","displayValue":"fbae3f4f478a86906c31b625126d43c5","value":"fbae3f4f478a86906c31b625126d43c5"},{"fieldName":"number","label":"number","displayValue":"KB0052648","value":"KB0052648"},{"fieldName":"document_type_id","label":"document_type_id","displayValue":"GLIDE_RECORD","value":"GLIDE_RECORD"},{"fieldName":"file_extension_id","label":"file_extension_id"},{"fieldName":"parenttitle","label":"parenttitle"},{"fieldName":"parentsysid_id","label":"parentsysid_id"},{"fieldName":"search_source_label","label":"search_source_label","displayValue":"Q&A Knowledge","value":"Q&A Knowledge"},{"fieldName":"url","label":"url","displayValue":"/kb_view.do?sys_kb_id=fbae3f4f478a86906c31b625126d43c5","value":"/kb_view.do?sys_kb_id=fbae3f4f478a86906c31b625126d43c5"},{"fieldName":"table","label":"table","displayValue":"kb_knowledge","value":"kb_knowledge"},{"fieldName":"parentsysid_id","label":"parentsysid_id"}],"type":"QUERY_CONTENT"},{"columns":[{"fieldName":"name","label":"name","displayValue":"Transferencia a <highlight>Agente</highlight> (Video)","value":"Transferencia a <highlight>Agente</highlight> (Video)"},{"fieldName":"source_table_name","label":"source_table_name","displayValue":"Knowledge","value":"Knowledge"},{"fieldName":"sys_id","label":"sys_id","displayValue":"f6aacb9e97a04610c240d714a253aff7","value":"f6aacb9e97a04610c240d714a253aff7"},{"fieldName":"number","label":"number","displayValue":"KB0081302","value":"KB0081302"},{"fieldName":"document_type_id","label":"document_type_id","displayValue":"GLIDE_RECORD","value":"GLIDE_RECORD"},{"fieldName":"file_extension_id","label":"file_extension_id"},{"fieldName":"parenttitle","label":"parenttitle"},{"fieldName":"parentsysid_id","label":"parentsysid_id"},{"fieldName":"search_source_label","label":"search_source_label","displayValue":"Q&A Knowledge","value":"Q&A Knowledge"},{"fieldName":"url","label":"url","displayValue":"/kb_view.do?sys_kb_id=f6aacb9e97a04610c240d714a253aff7","value":"/kb_view.do?sys_kb_id=f6aacb9e97a04610c240d714a253aff7"},{"fieldName":"table","label":"table","displayValue":"kb_knowledge","value":"kb_knowledge"},{"fieldName":"parentsysid_id","label":"parentsysid_id"}],"type":"QUERY_CONTENT"},{"columns":[{"fieldName":"name","label":"name","displayValue":"Tenable - Nessus <highlight>agent</highlight> troubleshooting issues guide(Mac&Windows) endpoints","value":"Tenable - Nessus <highlight>agent</highlight> troubleshooting issues guide(Mac&Windows) endpoints"},{"fieldName":"source_table_name","label":"source_table_name","displayValue":"Knowledge","value":"Knowledge"},{"fieldName":"sys_id","label":"sys_id","displayValue":"39464b7147820690498cc044846d430a","value":"39464b7147820690498cc044846d430a"},{"fieldName":"number","label":"number","displayValue":"KB0078185","value":"KB0078185"},{"fieldName":"document_type_id","label":"document_type_id","displayValue":"GLIDE_RECORD","value":"GLIDE_RECORD"},{"fieldName":"file_extension_id","label":"file_extension_id"},{"fieldName":"parenttitle","label":"parenttitle"},{"fieldName":"parentsysid_id","label":"parentsysid_id"},{"fieldName":"search_source_label","label":"search_source_label","displayValue":"Q&A Knowledge","value":"Q&A Knowledge"},{"fieldName":"url","label":"url","displayValue":"/kb_view.do?sys_kb_id=39464b7147820690498cc044846d430a","value":"/kb_view.do?sys_kb_id=39464b7147820690498cc044846d430a"},{"fieldName":"table","label":"table","displayValue":"kb_knowledge","value":"kb_knowledge"},{"fieldName":"parentsysid_id","label":"parentsysid_id"}],"type":"QUERY_CONTENT"}],"name":"Suggested"},{"records":[{"columns":[{"fieldName":"name","label":"name","displayValue":"run the order pizza agent","value":"run the order pizza agent"},{"fieldName":"score","label":"score","displayValue":"36","value":"36"},{"label":"sub_hint","fieldName":"sub_hint","value":"Frequently asked","displayValue":"Frequently asked"}],"type":"RAG_POPULAR_QUERY"},{"columns":[{"fieldName":"name","label":"name","displayValue":"use document agent to analyze the document","value":"use document agent to analyze the document"},{"fieldName":"score","label":"score","displayValue":"35","value":"35"}],"type":"RAG_POPULAR_QUERY"},{"columns":[{"fieldName":"name","label":"name","displayValue":"execute rag agent for what is a spam","value":"execute rag agent for what is a spam"},{"fieldName":"score","label":"score","displayValue":"17","value":"17"}],"type":"RAG_POPULAR_QUERY"},{"columns":[{"fieldName":"name","label":"name","displayValue":"what is the company s 401 k policy eligibility enrollment steps employee employer contributions vesting investment options and where to manage it","value":"what is the company s 401 k policy eligibility enrollment steps employee employer contributions vesting investment options and where to manage it"},{"fieldName":"score","label":"score","displayValue":"11","value":"11"}],"type":"RAG_POPULAR_QUERY"},{"columns":[{"fieldName":"name","label":"name","displayValue":"help me triage this case","value":"help me triage this case"},{"fieldName":"score","label":"score","displayValue":"11","value":"11"}],"type":"RAG_POPULAR_QUERY"}],"name":"RAG suggestions"}],"version":"1.0.0"}'), yi = {
  result: fi
};
function Va(e) {
  return typeof e == "object" && e !== null;
}
function vi(e) {
  const a = /* @__PURE__ */ new Map();
  for (const o of e) {
    if (!Va(o.data))
      continue;
    const r = o.data, p = [
      r.thread_id,
      // thread.item.updated
      r.item?.thread_id,
      // thread.item.added / done / replaced
      r.item?.threadId,
      // camelCase variant
      r.thread?.id
      // thread.created
    ].filter(
      (g) => typeof g == "string" && g.length > 0
    );
    for (const g of p)
      a.set(g, (a.get(g) ?? 0) + 1);
  }
  if (a.size === 0)
    return null;
  let n = null, l = 0;
  for (const [o, r] of a)
    r > l && (n = o, l = r);
  return n;
}
function wi(e, a, n) {
  return e.type === "thread.item.added" || e.type === "thread.item.replaced" ? ga(e, a, n) : e.type === "thread.item.updated" ? e.thread_id !== a ? e : { ...e, thread_id: n } : e.type === "thread.item.done" ? ga(e, a, n) : e.type === "progress_update" ? e.thread_id !== a ? e : { ...e, thread_id: n } : e.type === "thread.updated" ? e.thread?.id !== a ? e : { ...e, thread: { ...e.thread, id: n } } : e;
}
function ga(e, a, n) {
  const l = e.item;
  return !l || !(l.thread_id === a || l.threadId === a) ? e : {
    ...e,
    item: {
      ...l,
      ...l.thread_id === a && { thread_id: n },
      ...l.threadId === a && { threadId: n }
    }
  };
}
function xi(e, a, n) {
  const l = a !== null && a !== n, o = e.filter(
    (r) => Va(r.data) && r.data.type !== "thread.created"
  );
  return l ? o.map((r) => {
    const i = wi(r.data, a, n);
    return i === r.data ? r : { ...r, data: i };
  }) : o;
}
function Z() {
  if (kn)
    return;
  const e = "[TestHarness] This action requires mock mode. Enable with: window.__LBF_TEST_HARNESS__.enable({ useMockConnector: true })";
  throw console.error(e), new Error(e);
}
function Ci({
  threadId: e,
  customMessage: a,
  setCustomMessage: n,
  newThreadMessage: l,
  setNewThreadMessage: o
}) {
  const { connector: r } = yn(), i = ve(() => r, [r]), p = Et(), { rootRef: g } = we(), { actions: v } = Ta(), c = h(async () => {
    if (e)
      return e;
    Z(), p(oa({ phase: "connecting" }));
    const u = await i.simulateEmptyThreadCreation();
    return console.log("[TestHarness] Auto-created thread:", u), u;
  }, [e, i, p]), A = h(async () => {
    Z();
    const u = await i.simulateThreadCreation(
      "This is a test message to create a new thread"
    );
    console.log("[TestHarness] Created thread:", u);
  }, [i]), y = h(async () => {
    Z();
    const u = l.trim() || "User message without assistant response", b = await i.simulateThreadCreationWithoutResponse(u);
    console.log("[TestHarness] Created thread (user only):", b), o("");
  }, [l, o, i]), S = h(async () => {
    Z();
    const u = await i.simulateThreadCreationUnread(
      "This is an unread thread message"
    );
    console.log("[TestHarness] Created unread thread:", u);
  }, [i]), O = h(async () => {
    Z();
    const u = await i.simulateThreadWithHistory();
    console.log("[TestHarness] Created thread with history:", u);
  }, [i]), R = h(async () => {
    Z();
    const u = await i.simulateThreadCreationLiveAgent(
      "This is a live agent conversation"
    );
    console.log("[TestHarness] Created live agent thread:", u);
  }, [i]), k = h(() => {
    vn();
  }, []), V = h(async () => {
    const u = a || "This is a test message", b = await c();
    await i.simulateAssistantResponseBasedOnUserText(b, u), n("");
  }, [a, n, c, i]), f = h(async () => {
    const u = await c();
    await i.simulateAssistantStreamingResponse(
      u,
      mt.longResponse
    );
  }, [c, i]), x = h(
    async (u) => {
      const b = await c();
      await i.simulateAssistantStreamingResponse(
        b,
        mt[u]
      );
    },
    [c, i]
  ), T = h(async () => {
    const u = await c();
    await i.simulateLiveAgentResponse(
      u,
      mt.liveAgentGreeting,
      sa
    );
  }, [c, i]), B = h(async () => {
    Z();
    const u = await c();
    await i.simulateLiveAgentConnect(u);
  }, [c, i]), q = h(async () => {
    Z();
    const u = await c();
    await i.simulateLiveAgentDisconnect(u);
  }, [c, i]), F = h(() => {
    Z(), i.setContactMenuItemsAvailability(!0), console.log("[TestHarness] Live agent set to available");
  }, [i]), z = h(async () => {
    Z();
    const u = await c();
    i.simulateThreadUpdated(u, { liveAgentActive: !0 }), await p(
      wn({ messageContent: "Test message in live-agent mode" })
    );
    const b = 500;
    await new Promise((E) => setTimeout(E, b)), await i.simulateLiveAgentResponse(
      u,
      "Got your message! A live agent will follow up shortly.",
      sa
    );
  }, [c, i, p]), P = h(
    async (u) => {
      const b = await c();
      await i.simulateChartResponse(b, u);
    },
    [c, i]
  ), K = h(
    async (u) => {
      const b = await c();
      await i.simulateCalendarResponse(b, u);
    },
    [c, i]
  ), te = h(
    async (u) => {
      const b = await c(), { text: E, annotations: U } = da[u];
      await i.simulateCitationResponse(b, E, U);
    },
    [c, i]
  ), le = h(async () => {
    const u = await c(), { streamingText: b, text: E, annotations: U } = da.streamingWithMarkers;
    await i.simulateStreamingCitationResponse({
      threadId: u,
      streamingText: b,
      finalText: E,
      annotations: U
    });
  }, [c, i]), de = h(
    async (u) => {
      const b = await c();
      i.simulateThreadUpdated(b, u);
    },
    [c, i]
  ), ce = h(async () => {
    const u = await c();
    i.addInteractivePage(u);
  }, [c, i]), Ee = h(
    async (u) => {
      const b = await c();
      i.simulateThreadUpdated(b, { title: u });
    },
    [c, i]
  ), Re = h(
    async (u) => {
      await c(), await i.simulateThoughtMessage(u);
    },
    [c, i]
  ), D = h(
    async (u, b) => {
      const E = await c();
      b && await i.simulateUserMessage(E, b), await i.simulateWidgetResponse(E, u);
    },
    [c, i]
  ), Q = h(async () => {
    const u = await c();
    await i.simulateServerDefinedWidgetMessage(u);
  }, [c, i]), ue = h(async () => {
    const u = await c();
    await i.simulateInteractiveViewButtonMessage(u);
  }, [c, i]), Be = h(async () => {
    const u = await c();
    await i.simulateAixWidgetContinueDemo(u);
  }, [c, i]), xe = h(
    async (u) => {
      const b = JSON.parse(u);
      if (typeof b != "object" || b === null || !("type" in b))
        throw new Error('Widget must be an object with a "type" field');
      const E = b, U = await c();
      await i.simulateWidgetResponse(U, E);
    },
    [c, i]
  ), at = h(async () => {
    Z();
    const u = e || await i.simulateThreadCreationWithoutResponse(
      "Analyze the Q3 sales data, tell me the top-performing region, and then create a presentation slide for it."
    );
    await i.simulateComplexExecutionFlow(u);
  }, [e, i]), nt = h(async () => {
    const u = await c(), b = document.querySelector("now-lbf-chat-client"), E = "now:chat:event", U = ({ detail: fe }) => {
      window.setTimeout(() => {
        fe.payload.resolve(), b?.removeEventListener(E, U);
      }, 500);
    };
    b?.addEventListener(E, U), await i.simulateClientToolCall(u);
  }, [i, c]), it = h(
    (u, b = {}) => {
      xn({
        callId: `test-call-${Date.now()}`,
        threadId: e ?? `test-thread-${Date.now()}`,
        widgetId: ge,
        actionType: u,
        args: b
      });
    },
    [e]
  ), Ce = h(
    async (u, b, E = {}) => {
      const U = await c();
      await i.simulateClientToolCall(U, {
        widgetId: u,
        actionType: b,
        args: E
      });
    },
    [c, i]
  ), lt = h(
    async (u, b, E) => {
      const U = await c();
      await i.simulateWidgetResponse(U, u), await new Promise((fe) => setTimeout(fe, b)), await i.simulateClientToolCall(U, E);
    },
    [c, i]
  ), ae = h(
    async (u, b = {}) => {
      const E = await c();
      await i.simulateClientToolCall(E, {
        actionType: u,
        args: b
      });
    },
    [c, i]
  ), ot = h(
    async (u, b) => {
      Z();
      const E = vi(u), U = await c(), fe = xi(u, E, U);
      await i.replaySSEEvents(fe, b);
    },
    [i, c]
  ), rt = h(
    (u) => {
      const b = Kn(u);
      for (const E of b)
        v.addAttachment(E);
      re("TestHarness", `Added ${u} mock attachment(s)`);
    },
    [v]
  ), We = h(() => {
    v.clearAttachments(), re("TestHarness", "Cleared all attachments");
  }, [v]), st = h(() => {
    Z();
    const u = i.clearPersistedThreads();
    p(Cn()), p(oa({ phase: "connected:idle" })), console.log(`[TestHarness] Cleared ${u} persisted thread(s)`);
  }, [i, p]), He = h(
    (u, b = {}) => {
      const E = se(g);
      E && (E.invokeSkill({ skillId: u, skillParams: b }), re("TestHarness", "Skill execution triggered:", { skillId: u, skillParams: b }));
    },
    [g]
  ), dt = h(
    (u) => {
      const b = se(g);
      if (!b)
        return;
      const E = ki(u);
      b.newConversationContext = E, re("TestHarness", "Search transfer triggered:", { intention: u });
    },
    [g]
  ), ct = h(() => {
    xt.removeItem("INTRO_BANNER_DISMISSED_VERSION");
    const u = se(g);
    u && (u.removeAttribute("enable-intro-banner"), requestAnimationFrame(() => {
      u.setAttribute("enable-intro-banner", "true");
    }), console.log("[TestHarness] Onboarding banner enabled"));
  }, [g]), ut = h(() => {
    try {
      const b = Tn(yi), E = { ...b, userInput: "" };
      p({
        type: "suggestions/fetchSuggestions/fulfilled",
        payload: E,
        meta: {
          arg: "",
          requestId: `static-suggestions-${Date.now()}`,
          requestStatus: "fulfilled"
        }
      }), console.log("[TestHarness] Loaded static suggestions:", b);
    } catch (u) {
      console.error("[TestHarness] Failed to load static suggestions:", u);
    }
  }, [p]);
  return {
    ensureThreadExists: c,
    handleCreateNewThread: A,
    handleCreateNewThreadUserOnly: y,
    handleCreateThreadUnread: S,
    handleCreateThreadLiveAgent: R,
    handleDisableTestHarness: k,
    actionHandlers: {
      handleLoadStaticSuggestions: ut,
      handleSendUserMessage: V,
      handleStreamingResponse: f,
      handleSampleMessage: x,
      handleLiveAgentMessage: T,
      handleLiveAgentConnect: B,
      handleLiveAgentDisconnect: q,
      handleLiveAgentAvailable: F,
      handleSendLiveAgentUserMessage: z,
      handleChartResponse: P,
      handleCalendarResponse: K,
      handleCitationResponse: te,
      handleStreamingCitationResponse: le,
      handleThreadUpdated: de,
      handleAddInteractivePage: ce,
      handleThoughtMessage: Re,
      handleWidgetResponse: D,
      handleServerDefinedWidgetDemo: Q,
      handleInteractiveViewButtonDemo: ue,
      handleAixWidgetContinueDemo: Be,
      handleRawJsonWidget: xe,
      handleComplexExecutionFlow: at,
      handleClientToolCall: nt,
      handleAIELClientTool: it,
      handleServerToAIELClientTool: Ce,
      handleWidgetThenToolCall: lt,
      handleServerBuiltInClientTool: ae,
      handleReplaySSEEvents: ot,
      handleClearPersistedThreads: st,
      handleCreateThreadUnread: S,
      handleCreateThreadWithHistory: O,
      handleCreateThreadLiveAgent: R,
      handleThreadTitleUpdate: Ee,
      handleSkillExecution: He,
      handleSearchTransfer: dt,
      handleAddMockAttachments: rt,
      handleClearAttachments: We,
      handleShowOnboardingBanner: ct
    }
  };
}
function Ti() {
  return 'To order a new phone, navigate to the IT Service Catalog and select "Order Phone".​[{"source_type":"kb","sys_id":"24d9243abc1ef001","title":"How to order a new phone","table":"kb_knowledge","number":1,"placeholder":"doc_1"}]​ Make sure your request is approved by your manager before proceeding.​[{"source_type":"kb","sys_id":"5f8e1234def45602","title":"Phone procurement policy","table":"kb_knowledge","number":2,"placeholder":"doc_2"}]​';
}
function ki(e) {
  const a = Ti(), l = {
    propValues: {
      resultType: "synthesized",
      description: 'To order a new phone, navigate to the IT Service Catalog and select "Order Phone".',
      model: {
        "columns.raw_answer": JSON.stringify({
          display_value: a,
          citation_sources: [
            {
              source_sys_id: "24d9243abc1ef001",
              source_type: "kb",
              source_table: "kb_knowledge",
              source_content: 'Navigate to the IT Service Catalog, find the "Order Phone" item, and submit a request.'
            },
            {
              source_sys_id: "5f8e1234def45602",
              source_type: "kb",
              source_table: "kb_knowledge",
              source_content: "All phone orders require manager approval and must comply with the procurement policy."
            }
          ]
        })
      }
    }
  };
  return {
    transferred_search_result: {
      searchContext: {
        intention: e,
        utterance: "order phone",
        searchContextConfigId: "80a4472477703110569156391e5a9965",
        rawResult: {
          executionResult: {
            geniusResultsTemplates: {
              items: [l]
            },
            searchResultsTemplates: {
              items: [{
                propValues: {
                  resultType: "citation",
                  sysId: "abc123def456",
                  title: "Order a Phone",
                  name: "Order a Phone",
                  table: "sc_cat_item",
                  model: {
                    sys_id: "abc123def456",
                    table: "sc_cat_item",
                    record_class_name: "sc_cat_item",
                    name: "Order a Phone"
                  }
                }
              }]
            }
          }
        },
        ...e === "execute" ? { selectedItem: { type: "citation", index: 0 } } : {}
      }
    }
  };
}
const ma = 2;
function Si({
  persistedBounds: e,
  windowSize: a
}) {
  return ve(() => {
    Ge("useWindowConstrainedBounds", "Calculating constraints", {
      windowSize: a,
      persistedBounds: e
    });
    let n = e.width, l = e.height;
    if (e.isExpanded) {
      const A = a.width - Sn * ma, y = a.height - _n * ma;
      n = Math.max(ka, Math.min(e.width, A)), l = Math.max(Sa, Math.min(e.height, y)), Ge("useWindowConstrainedBounds", "Constrained dimensions:", {
        constrainedWidth: n,
        constrainedHeight: l
      });
    }
    const o = e.isExpanded ? n : Ct, r = e.isExpanded ? l : _a, i = At({
      x: e.x,
      y: e.y,
      width: o,
      height: r,
      windowWidth: a.width,
      windowHeight: a.height
    });
    Ge("useWindowConstrainedBounds", "Constrained position:", i);
    const p = i.x !== e.x || i.y !== e.y, g = n !== e.width || l !== e.height, v = p || g ? {
      x: p ? i.x : void 0,
      y: p ? i.y : void 0,
      width: g ? n : void 0,
      height: g ? l : void 0
    } : {};
    Ge("useWindowConstrainedBounds", "Result:", {
      needsPositionOverride: p,
      needsDimensionOverride: g,
      visualOverrides: v
    });
    const c = {
      x: v.x ?? e.x,
      y: v.y ?? e.y,
      width: v.width ?? e.width,
      height: v.height ?? e.height
    };
    return {
      visualOverrides: v,
      effectiveBounds: c,
      needsPositionOverride: p,
      needsDimensionOverride: g
    };
  }, [e, a]);
}
const ne = {
  width: "100%",
  padding: "8px 12px",
  marginBottom: "6px",
  backgroundColor: "#333",
  color: "#fff",
  border: "1px solid #444",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "12px",
  textAlign: "left",
  transition: "background-color 0.2s"
}, Pa = {
  width: "100%",
  padding: "6px 10px",
  backgroundColor: "#7f1d1d",
  color: "#fca5a5",
  border: "1px solid #991b1b",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "10px",
  fontWeight: "500",
  textAlign: "center",
  transition: "all 0.2s"
}, tt = {
  width: "100%",
  padding: "8px 12px",
  marginBottom: "8px",
  backgroundColor: "#222",
  color: "#fff",
  border: "1px solid #444",
  borderRadius: "4px",
  fontSize: "12px",
  boxSizing: "border-box"
}, _i = {
  width: "100%",
  padding: "10px 12px",
  backgroundColor: "#222",
  color: "#fff",
  border: "1px solid #444",
  borderRadius: "6px",
  fontSize: "13px",
  boxSizing: "border-box",
  outline: "none"
}, Ii = {
  flex: 1,
  padding: "10px 8px",
  backgroundColor: "transparent",
  color: "#aaa",
  border: "none",
  cursor: "pointer",
  fontSize: "11px",
  fontWeight: "500",
  transition: "all 0.2s",
  textAlign: "center"
}, me = {
  position: "absolute",
  zIndex: 10,
  backgroundColor: "transparent"
}, Ba = {
  width: "100%",
  // 3 lines of monospace text ≈ 3 * (12px font × 1.4 line-height) + 24px padding
  minHeight: "74px",
  // Keeps the textarea from dominating the devtools tab; tall enough for ~20 lines of SSE data
  maxHeight: "400px",
  padding: "12px",
  backgroundColor: "#1a1a1a",
  color: "#e0e0e0",
  border: "1px solid #444",
  borderRadius: "4px",
  fontSize: "12px",
  fontFamily: "monospace",
  boxSizing: "border-box",
  resize: "none",
  lineHeight: "1.4",
  overflow: "auto"
}, Wa = {
  padding: "8px 12px",
  marginTop: "8px",
  backgroundColor: "#7f1d1d",
  color: "#fca5a5",
  border: "1px solid #991b1b",
  borderRadius: "4px",
  fontSize: "11px",
  fontFamily: "monospace",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word"
}, Ha = {
  padding: "8px 12px",
  marginTop: "8px",
  backgroundColor: "#14532d",
  color: "#86efac",
  border: "1px solid #166534",
  borderRadius: "4px",
  fontSize: "11px"
}, yt = {
  padding: "16px",
  backgroundColor: "#1f1f1f",
  border: "1px solid #333",
  borderRadius: "8px"
}, vt = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "12px",
  paddingBottom: "10px",
  borderBottom: "1px solid #333",
  fontSize: "13px",
  fontWeight: "bold",
  color: "#fff"
}, qa = {
  paddingBottom: "12px",
  borderBottom: "1px solid #333"
}, Ai = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // 60px top offset positions the palette near the header
  paddingTop: "60px",
  zIndex: 100
}, Ei = {
  width: "100%",
  padding: "12px 16px",
  backgroundColor: "#2a2a2a",
  color: "#fff",
  border: "none",
  borderBottom: "1px solid #444",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box"
}, Ri = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "8px 16px",
  cursor: "pointer",
  fontSize: "12px",
  color: "#ddd",
  transition: "background-color 0.1s"
}, Ni = {
  padding: "6px 12px",
  borderTop: "1px solid #333",
  backgroundColor: "#1a1a1a",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "10px",
  flexShrink: 0
}, Li = {
  padding: "2px 8px",
  borderRadius: "10px",
  fontSize: "10px",
  fontWeight: "500",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  // Prevents long thread IDs from blowing out sidebar width
  maxWidth: "160px"
}, ba = "aiexWrapper", zi = "coral-light", Di = "/src/testHarness/themes";
function zt(e) {
  return e.startsWith("janus");
}
function Mi(e) {
  const a = zt(e) ? "janus-themes" : e;
  return `${Di}/${a}.html`;
}
function Oi(e) {
  return `${zt(e) ? "janus-themes" : e}-theme-styles`;
}
class Vi {
  currentContainerId = "";
  constructor() {
  }
  toCssVars(a) {
    return Object.entries(a).filter(([n]) => n.startsWith("--")).map(([n, l]) => `${n}: ${l};`);
  }
  getDefaultTheme() {
    return zi;
  }
  async installTheme(a) {
    let n = document.getElementById(ba);
    n || (n = document.createElement("style"), n.id = ba, document.head.appendChild(n), n.textContent = `:root { color-scheme: light dark; }
      .aiex-dark {
        background: linear-gradient(180deg, rgba(var(--sn-window--aiex--background-color, var(--now-color_surface--brand-1)), .8) 0, rgba(var(--sn-window--aiex--background-color, var(--now-color_surface--brand-1)), .25) 50%, rgba(var(--sn-window--aiex--background-color, var(--now-color_surface--brand-1)), .1) 100%), rgb(var(--now-color_background--primary, var(--now-color--neutral-0)));
      }
      .aiex-light {
        background: #fff;
      }`);
    const l = document.querySelector(".aix-owned-container"), o = a.startsWith("janus");
    if (l && (l.classList.remove("aiex-dark", "aiex-light"), !o)) {
      const i = a.includes("dark") ? "aiex-dark" : "aiex-light";
      l.classList.add(i);
    }
    const r = a.includes("dark") ? "dark" : "light";
    document.body.setAttribute("data-theme", r), await this.installHtmlTheme(a);
  }
  async fetchThemeStyles(a, n) {
    try {
      const o = await (await fetch(a)).text(), r = new DOMParser().parseFromString(o, "text/html"), i = document.createElement("div");
      i.id = n;
      for (const p of r.querySelectorAll("style")) {
        const g = document.createElement("style");
        g.textContent = p.textContent, g.id = p.id || "", i.appendChild(g);
      }
      return i;
    } catch (l) {
      return console.error(`Failed to load ${a}:`, l), null;
    }
  }
  async installHtmlTheme(a) {
    const n = Oi(a), l = Mi(a);
    if (this.currentContainerId && this.currentContainerId !== n && document.getElementById(this.currentContainerId)?.remove(), !document.getElementById(n)) {
      const o = await this.fetchThemeStyles(l, n);
      if (!o)
        return;
      document.head.appendChild(o);
    }
    if (this.currentContainerId = n, zt(a)) {
      const o = a.slice(6);
      document.documentElement.setAttribute("data-theme", o);
    } else
      document.documentElement.removeAttribute("data-theme");
  }
  clearTheme() {
    this.currentContainerId && (document.getElementById(this.currentContainerId)?.remove(), this.currentContainerId = ""), document.documentElement.removeAttribute("data-theme");
  }
}
const fa = new Vi();
function Pi(e) {
  return e.reduce((a, n) => {
    const l = n.group || "Other", o = a.get(l) || [];
    return a.set(l, [...o, n]);
  }, /* @__PURE__ */ new Map());
}
function ya({
  action: e,
  onActionClick: a
}) {
  return /* @__PURE__ */ t("button", { onClick: async () => {
    a?.(e.id), await e.onClick();
  }, style: ne, title: e.description, children: e.label });
}
const Bi = {
  color: "#888",
  fontSize: "10px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  marginTop: "12px",
  marginBottom: "6px",
  paddingBottom: "4px",
  borderBottom: "1px solid #333"
};
function Ie({
  actions: e,
  showGroupHeaders: a = !0,
  onActionClick: n,
  columns: l = 1
}) {
  if (e.length === 0)
    return null;
  if (!a) {
    const r = Math.ceil(e.length / l), i = l > 1 ? {
      display: "grid",
      gridTemplateRows: `repeat(${r}, auto)`,
      gridAutoFlow: "column",
      gap: "4px"
    } : { display: "flex", flexDirection: "column", gap: "4px" };
    return /* @__PURE__ */ t("div", { style: i, children: e.map((p) => /* @__PURE__ */ t(ya, { action: p, onActionClick: n }, p.id)) });
  }
  const o = Pi(e);
  return /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: Array.from(o.entries()).map(([r, i]) => /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { style: Bi, children: r }),
    i.map((p) => /* @__PURE__ */ t(ya, { action: p, onActionClick: n }, p.id))
  ] }, r)) });
}
function Ka(e) {
  return e.conversation.items.find(
    (n) => An(n) && n.widget?.id === ge
  )?.id ?? null;
}
function Wi(e) {
  return typeof e.incident_id == "string" && typeof e.close_code == "string" && typeof e.close_notes == "string";
}
function Hi(e) {
  return typeof e.message == "string";
}
function qi(e) {
  return typeof e.increment == "number";
}
function Ki() {
  const [e, a] = L(0), [n, l] = L(null), o = Et(), r = Rt(Ka), i = X(e), p = X(r);
  i.current = e, p.current = r;
  const g = h(
    (y) => {
      a(y), i.current = y;
      const S = p.current;
      S && o(
        En({
          itemId: S,
          widget: Ve({ counter: y })
        })
      );
    },
    [o]
  ), v = ve(
    () => ({
      /**
       * Show an alert with a message from the action payload.
       */
      "show-alert": Tt(Hi, (y) => (re("ClientToolsDemoHandler", "show-alert triggered", { message: y.message }), l(`show-alert: ${y.message}`), window.alert(`Client Tool Action: ${y.message}`), { success: !0, message: y.message })),
      /**
       * Update a counter based on the increment value from payload.
       */
      "update-counter": Tt(qi, (y) => {
        re("ClientToolsDemoHandler", "update-counter triggered", {
          increment: y.increment
        });
        const S = i.current, O = S + y.increment;
        return g(O), l(`update-counter: ${S} → ${O}`), { success: !0, newValue: O };
      }),
      /**
       * Toggle theme (demo action - doesn't actually change theme).
       * This handler doesn't need typed args, so we use a plain function.
       */
      "toggle-theme": () => (re("ClientToolsDemoHandler", "toggle-theme triggered"), l("toggle-theme: Theme toggled (demo)"), { success: !0, theme: "toggled" })
    }),
    [g]
  );
  return Ra(ge, v), e !== 0 || n !== null ? /* @__PURE__ */ t(
    "div",
    {
      style: {
        position: "fixed",
        bottom: "10px",
        left: "10px",
        padding: "8px 12px",
        background: "rgba(0, 0, 0, 0.8)",
        color: "white",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "monospace",
        zIndex: 9999,
        maxWidth: "350px"
      },
      children: [
        /* @__PURE__ */ t("div", { style: { fontWeight: "bold", marginBottom: "4px" }, children: "Client Tools Handler" }),
        /* @__PURE__ */ t("div", { style: { color: "#87CEEB" }, children: [
          "Widget counter: ",
          e,
          " (see badge in widget ↑)"
        ] }),
        n ? /* @__PURE__ */ t("div", { style: { color: "#90EE90", marginTop: "4px" }, children: [
          "Last: ",
          n
        ] }) : null
      ]
    }
  ) : null;
}
const va = {
  id: "INC0012345",
  status: "open",
  closeCode: null,
  closeNotes: null,
  closedAt: null
};
function Ui() {
  const [e, a] = L(va), [n, l] = L(null), o = Rt(Ka);
  H(() => {
    if (!o)
      return;
    const y = document.createElement("div");
    return y.id = "external-widget-demo-portal", document.body.appendChild(y), l(y), () => {
      document.body.removeChild(y), l(null);
    };
  }, [o]);
  const r = ve(
    () => ({
      "close-incident": Tt(Wi, (y) => (re("ExternalWidgetDemoHandler", "close-incident triggered", y), a((S) => ({
        ...S,
        id: y.incident_id,
        status: "closed",
        closeCode: y.close_code,
        closeNotes: y.close_notes,
        closedAt: (/* @__PURE__ */ new Date()).toLocaleTimeString()
      })), { success: !0, incident_id: y.incident_id, status: "closed" }))
    }),
    []
  );
  Ra(Ma, r);
  const i = h(() => a(va), []);
  if (!n)
    return null;
  const p = e.status === "closed", g = p ? "#4ecca3" : "#e94560", v = p ? "#4ecca3" : "#e94560", c = p ? /* @__PURE__ */ t("div", { style: { marginTop: "6px" }, children: [
    /* @__PURE__ */ t("div", { children: [
      "Close code: ",
      /* @__PURE__ */ t("span", { style: { color: "#4ecca3" }, children: e.closeCode })
    ] }),
    /* @__PURE__ */ t("div", { style: { color: "#aaa", marginTop: "2px" }, children: e.closeNotes }),
    /* @__PURE__ */ t("div", { style: { color: "#666", marginTop: "4px", fontSize: "10px" }, children: [
      "Closed at ",
      e.closedAt
    ] })
  ] }) : /* @__PURE__ */ t("div", { style: { color: "#888", fontStyle: "italic" }, children: 'Click "Close Incident (External)" in the chatkit widget to close this incident via cross-widget tool targeting.' }), A = p ? /* @__PURE__ */ t(
    "button",
    {
      type: "button",
      onClick: i,
      style: {
        marginTop: "8px",
        width: "100%",
        padding: "6px",
        background: "transparent",
        color: "#888",
        border: "1px solid #444",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "11px",
        fontFamily: "monospace"
      },
      children: "Reset to Open"
    }
  ) : null;
  return In(
    /* @__PURE__ */ t(
      "div",
      {
        style: {
          position: "fixed",
          top: "10px",
          right: "10px",
          width: "300px",
          padding: "12px 16px",
          background: "#1a1a2e",
          color: "#e0e0e0",
          borderRadius: "8px",
          fontSize: "12px",
          fontFamily: "monospace",
          zIndex: 1e4,
          border: `2px solid ${v}`,
          boxShadow: `0 4px 12px ${v}44`,
          transition: "border-color 0.3s, box-shadow 0.3s"
        },
        children: [
          /* @__PURE__ */ t(
            "div",
            {
              style: {
                fontWeight: "bold",
                fontSize: "13px",
                color: "#e0e0e0",
                marginBottom: "4px"
              },
              children: "External Incident Widget"
            }
          ),
          /* @__PURE__ */ t("div", { style: { color: "#666", fontSize: "10px", marginBottom: "10px" }, children: "Rendered in document.body (outside lbf-client shadow root)" }),
          /* @__PURE__ */ t(
            "div",
            {
              style: {
                background: "#0f3460",
                borderRadius: "4px",
                padding: "10px"
              },
              children: [
                /* @__PURE__ */ t(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "6px"
                    },
                    children: [
                      /* @__PURE__ */ t("span", { style: { fontWeight: "bold" }, children: e.id }),
                      /* @__PURE__ */ t(
                        "span",
                        {
                          style: {
                            color: g,
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            fontSize: "11px",
                            padding: "2px 8px",
                            borderRadius: "10px",
                            border: `1px solid ${g}`
                          },
                          children: e.status
                        }
                      )
                    ]
                  }
                ),
                c
              ]
            }
          ),
          A
        ]
      }
    ),
    n
  );
}
const je = 10, Fi = 36;
function Ua({
  actions: e,
  quickActions: a,
  onActionClick: n,
  onClose: l
}) {
  const [o, r] = L(""), i = X(null), p = X(null), g = X(null);
  Rn({
    ref: g,
    onOutsideInteraction: l,
    escapeKey: !1
  }), H(() => {
    i.current?.focus();
  }, []), H(() => {
    const f = p.current, x = f?.firstElementChild;
    f && x && (f.style.maxHeight = `${je * x.offsetHeight}px`);
  }, []);
  const v = ve(() => {
    const f = /* @__PURE__ */ new Map();
    for (const x of Ia)
      f.set(x.id, x.label);
    return f;
  }, []), c = ve(() => o.trim() ? e.map((f) => {
    const x = Ze(o, f.label), T = f.group ? Ze(o, f.group) : -1, B = x >= 0 ? x : T >= 0 ? T * 0.5 : -1;
    return { action: f, score: B };
  }).filter((f) => f.score >= 0).sort((f, x) => x.score - f.score).slice(0, je).map((f) => f.action) : a.length > 0 ? a : e.slice(0, je), [e, a, o]), A = h(
    (f) => {
      n(f.id), f.onClick(), l();
    },
    [n, l]
  ), y = h(
    (f) => {
      const x = c[f];
      x && A(x);
    },
    [c, A]
  ), { selectedIndex: S, resetSelection: O, navigateOnKeyDown: R } = Un({
    itemCount: c.length,
    onSelect: y,
    onClose: l,
    wrap: !0
  }), k = h(
    (f) => {
      r(f), O();
    },
    [O]
  );
  let V = null;
  return c.length === 0 && (V = /* @__PURE__ */ t(
    "div",
    {
      style: {
        padding: "16px",
        color: "#666",
        fontSize: "12px",
        textAlign: "center"
      },
      children: "No matching actions"
    }
  )), /* @__PURE__ */ t("div", { style: Ai, children: /* @__PURE__ */ t(
    "div",
    {
      ref: g,
      style: {
        width: "90%",
        // 400px max keeps the palette compact within the panel
        maxWidth: "400px",
        backgroundColor: "#1a1a1a",
        border: "1px solid #444",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)"
      },
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            ref: i,
            type: "text",
            placeholder: "Search actions...",
            value: o,
            onInput: (f) => k(f.currentTarget.value),
            onKeyDown: R,
            style: Ei
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            ref: p,
            style: {
              maxHeight: `${je * Fi}px`,
              overflowY: "auto"
            },
            children: [
              V,
              c.map((f, x) => {
                let T = null;
                return f.group && (T = /* @__PURE__ */ t(
                  "span",
                  {
                    style: {
                      fontSize: "9px",
                      color: "#888",
                      marginRight: "4px"
                    },
                    children: f.group
                  }
                )), /* @__PURE__ */ t(
                  "div",
                  {
                    onClick: () => A(f),
                    style: {
                      ...Ri,
                      backgroundColor: x === S ? "#2a2a2a" : "transparent"
                    },
                    children: [
                      /* @__PURE__ */ t("span", { style: { flex: 1 }, children: f.label }),
                      T,
                      /* @__PURE__ */ t(
                        "span",
                        {
                          style: {
                            fontSize: "9px",
                            color: "#666",
                            backgroundColor: "#2a2a2a",
                            padding: "2px 6px",
                            borderRadius: "4px"
                          },
                          children: v.get(f.tab) ?? f.tab
                        }
                      )
                    ]
                  },
                  f.id
                );
              })
            ]
          }
        )
      ]
    }
  ) });
}
function Fa() {
  const e = X(null), a = h(() => {
    const n = e.current;
    n && (n.style.height = "auto", n.style.height = `${n.scrollHeight}px`);
  }, []);
  return { ref: e, autoGrow: a };
}
function Gi({ threadId: e, onSendRawJsonWidget: a }) {
  const [n, l] = L(""), [o, r] = L(null), [i, p] = L(!1), { ref: g, autoGrow: v } = Fa(), c = !e, A = (k) => {
    if (l(k), p(!1), v(), !k.trim()) {
      r(null);
      return;
    }
    try {
      JSON.parse(k), r(null);
    } catch (V) {
      r(V instanceof Error ? V.message : "Invalid JSON");
    }
  }, y = async () => {
    if (!(!n.trim() || o || c))
      try {
        await a(n), p(!0), setTimeout(() => p(!1), Ea);
      } catch (k) {
        r(k instanceof Error ? k.message : "Failed to send widget");
      }
  }, S = c || !n.trim() || !!o;
  let O = null;
  o && (O = /* @__PURE__ */ t("div", { style: Wa, children: [
    "Error: ",
    o
  ] }));
  let R = null;
  return i && (R = /* @__PURE__ */ t("div", { style: Ha, children: "Widget sent successfully!" })), /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ t(
        "div",
        {
          style: {
            fontSize: "11px",
            color: "#888",
            marginBottom: "10px"
          },
          children: "Enter arbitrary JSON to test invalid widget configurations from the backend"
        }
      ),
      /* @__PURE__ */ t(
        "textarea",
        {
          ref: g,
          placeholder: c ? "Create a thread first..." : `{
  "type": "card",
  "children": [...]
}`,
          value: n,
          onInput: (k) => A(k.currentTarget.value),
          disabled: c,
          style: {
            ...Ba,
            ...c ? {
              backgroundColor: "#1a1a1a",
              color: "#666",
              cursor: "not-allowed",
              opacity: kt
            } : {}
          }
        }
      ),
      O,
      R
    ] }),
    /* @__PURE__ */ t(
      "button",
      {
        onClick: y,
        disabled: S,
        style: {
          ...ne,
          backgroundColor: S ? "#1a1a1a" : "#2563eb",
          color: S ? "#666" : "#fff",
          cursor: S ? "not-allowed" : "pointer",
          opacity: S ? kt : Aa
        },
        children: "Send Raw JSON Widget"
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        style: {
          padding: "12px",
          backgroundColor: "#2a2a2a",
          borderRadius: "4px",
          fontSize: "11px",
          color: "#aaa"
        },
        children: [
          /* @__PURE__ */ t("div", { style: { fontWeight: "bold", marginBottom: "8px", color: "#fff" }, children: "💡 Tips" }),
          /* @__PURE__ */ t("ul", { style: { margin: 0, paddingLeft: "16px" }, children: [
            /* @__PURE__ */ t("li", { children: "Use this to test malformed widget configs" }),
            /* @__PURE__ */ t("li", { children: "Missing required fields will show validation errors" }),
            /* @__PURE__ */ t("li", { children: "Invalid types or structures reveal error handling" })
          ] })
        ]
      }
    )
  ] });
}
function It(e) {
  if (e.currentDataLines.length === 0)
    return;
  const a = e.currentDataLines.join(`
`);
  try {
    const n = JSON.parse(a);
    e.events.push({
      eventType: e.currentEventType || "message",
      data: n,
      rawData: a
    });
  } catch {
    const n = a.trim();
    (n === "[DONE]" || n === "done") && e.events.push({
      eventType: "done",
      data: null,
      rawData: a
    });
  }
  e.currentEventType = null, e.currentDataLines = [];
}
function ji(e, a) {
  if (e === "") {
    It(a);
    return;
  }
  if (e.startsWith("event:")) {
    a.currentDataLines.length > 0 && It(a), a.currentEventType = e.substring(6).trim();
    return;
  }
  if (e.startsWith("data:")) {
    const n = e.substring(5);
    a.currentDataLines.push(n);
    return;
  }
  a.currentDataLines.length > 0 && a.currentDataLines.push(e);
}
function wa(e) {
  const a = {
    events: [],
    currentEventType: null,
    currentDataLines: []
  }, n = e.split(`
`);
  for (const l of n)
    ji(l.trim(), a);
  return It(a), a.events;
}
const wt = [
  { label: "Realtime (20ms)", value: 20 },
  { label: "Fast (5ms)", value: 5 },
  { label: "Instant (0ms)", value: 0 },
  { label: "Slow (100ms)", value: 100 },
  { label: "Very Slow (200ms)", value: 200 }
], Qi = 0;
function Yi({ onReplaySSEEvents: e }) {
  const [a, n] = L(""), [l, o] = L(!1), [r, i] = L(null), [p, g] = L(!1), [v, c] = L(!1), [A, y] = L(Qi), [S, O] = L(null), { ref: R, autoGrow: k } = Fa(), V = h(
    (z) => {
      if (n(z), g(!1), O(null), k(), !z.trim()) {
        i(null);
        return;
      }
      try {
        const P = wa(z);
        if (P.length === 0) {
          i("No valid SSE events found in input");
          return;
        }
        O(P.length), i(null);
      } catch (P) {
        i(P instanceof Error ? P.message : "Failed to parse SSE events");
      }
    },
    [k]
  ), f = h(async () => {
    if (!(!a.trim() || r || v))
      try {
        c(!0);
        const z = wa(a), P = A >= 0 && A < wt.length ? A : 0, K = wt[P].value;
        await e(z, K), g(!0), setTimeout(() => g(!1), Ea);
      } catch (z) {
        i(z instanceof Error ? z.message : "Failed to replay events");
      } finally {
        c(!1);
      }
  }, [a, r, v, A, e]), x = !a.trim() || !!r || v;
  let T = null;
  S !== null && !r && (T = /* @__PURE__ */ t(
    "div",
    {
      style: {
        padding: "6px 10px",
        marginTop: "8px",
        backgroundColor: "#1e3a5f",
        color: "#93c5fd",
        border: "1px solid #1e40af",
        borderRadius: "4px",
        fontSize: "11px"
      },
      children: [
        "Parsed ",
        S,
        " event",
        S !== 1 ? "s" : "",
        " ready to replay"
      ]
    }
  ));
  let B = null;
  r && (B = /* @__PURE__ */ t("div", { style: Wa, children: [
    "Error: ",
    r
  ] }));
  let q = null;
  p && (q = /* @__PURE__ */ t("div", { style: Ha, children: "Events replayed successfully!" }));
  let F = null;
  return l && (F = /* @__PURE__ */ t("div", { style: { padding: "0 12px 12px" }, children: [
    /* @__PURE__ */ t("ul", { style: { margin: 0, paddingLeft: "16px" }, children: [
      /* @__PURE__ */ t("li", { children: "Open browser DevTools → Network tab" }),
      /* @__PURE__ */ t("li", { children: 'Filter by "Fetch/XHR" or "EventStream"' }),
      /* @__PURE__ */ t("li", { children: "Find the streaming request (usually POST to /threads)" }),
      /* @__PURE__ */ t("li", { children: "Click on it → Response/EventStream tab" }),
      /* @__PURE__ */ t("li", { children: "Copy the raw event stream text" })
    ] }),
    /* @__PURE__ */ t(
      "div",
      {
        style: {
          marginTop: "12px",
          padding: "8px",
          backgroundColor: "#1a1a1a",
          borderRadius: "4px",
          fontFamily: "monospace",
          fontSize: "10px",
          whiteSpace: "pre-wrap"
        },
        children: `event:message
data:{"type":"thread.item.added"...}

event:message
data:{"type":"thread.item.updated"...}`
      }
    )
  ] })), /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ t(
        "div",
        {
          style: {
            fontSize: "11px",
            color: "#888",
            marginBottom: "10px"
          },
          children: "Paste raw SSE event stream data (event:message / data:JSON lines) to replay"
        }
      ),
      /* @__PURE__ */ t(
        "textarea",
        {
          ref: R,
          placeholder: 'event:message\\ndata:{"type":"thread.item.added",...}\\n\\nevent:message\\ndata:{"type":"thread.item.updated",...}',
          value: a,
          onInput: (z) => V(z.currentTarget.value),
          style: Ba
        }
      ),
      T,
      B,
      q
    ] }),
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ t(
        "label",
        {
          style: {
            display: "block",
            fontSize: "11px",
            color: "#aaa",
            marginBottom: "6px"
          },
          children: "Replay Speed:"
        }
      ),
      /* @__PURE__ */ t(
        "select",
        {
          value: A,
          onChange: (z) => y(Number(z.currentTarget.value)),
          style: {
            width: "100%",
            padding: "6px 8px",
            backgroundColor: "#222",
            color: "#fff",
            border: "1px solid #444",
            borderRadius: "4px",
            fontSize: "11px",
            cursor: "pointer"
          },
          children: wt.map((z, P) => /* @__PURE__ */ t("option", { value: P, children: z.label }, z.value))
        }
      )
    ] }),
    /* @__PURE__ */ t(
      "button",
      {
        onClick: f,
        disabled: x,
        style: {
          ...ne,
          backgroundColor: x ? "#1a1a1a" : "#059669",
          color: x ? "#666" : "#fff",
          cursor: x ? "not-allowed" : "pointer",
          opacity: x ? kt : Aa
        },
        children: v ? "Replaying..." : "Replay SSE Events"
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        style: {
          backgroundColor: "#2a2a2a",
          borderRadius: "4px",
          fontSize: "11px",
          color: "#aaa"
        },
        children: [
          /* @__PURE__ */ t(
            "button",
            {
              onClick: () => o((z) => !z),
              style: {
                ...ne,
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "transparent",
                padding: "10px 12px",
                fontSize: "11px",
                color: "#999"
              },
              children: [
                /* @__PURE__ */ t(
                  "span",
                  {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      border: "1px solid #666",
                      fontSize: "10px",
                      fontWeight: "bold",
                      color: "#999",
                      flexShrink: 0
                    },
                    children: "?"
                  }
                ),
                /* @__PURE__ */ t("span", { style: { flex: 1, textAlign: "left" }, children: "How to capture SSE events" }),
                /* @__PURE__ */ t("span", { style: { fontSize: "9px" }, children: l ? "▲" : "▼" })
              ]
            }
          ),
          F
        ]
      }
    )
  ] });
}
function $i({ onResizeStart: e }) {
  return /* @__PURE__ */ t(ye, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        onMouseDown: e(pe.NorthWest),
        style: {
          ...me,
          top: "-4px",
          left: "-4px",
          cursor: "nw-resize",
          width: "12px",
          height: "12px"
        }
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        onMouseDown: e(pe.NorthEast),
        style: {
          ...me,
          top: "-4px",
          right: "-4px",
          cursor: "ne-resize",
          width: "12px",
          height: "12px"
        }
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        onMouseDown: e(pe.SouthWest),
        style: {
          ...me,
          bottom: "-4px",
          left: "-4px",
          cursor: "sw-resize",
          width: "12px",
          height: "12px"
        }
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        onMouseDown: e(pe.SouthEast),
        style: {
          ...me,
          bottom: "-4px",
          right: "-4px",
          cursor: "se-resize",
          width: "12px",
          height: "12px"
        }
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        onMouseDown: e(pe.North),
        style: {
          ...me,
          top: "-4px",
          left: "12px",
          right: "12px",
          height: "8px",
          cursor: "n-resize"
        }
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        onMouseDown: e(pe.South),
        style: {
          ...me,
          bottom: "-4px",
          left: "12px",
          right: "12px",
          height: "8px",
          cursor: "s-resize"
        }
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        onMouseDown: e(pe.West),
        style: {
          ...me,
          left: "-4px",
          top: "12px",
          bottom: "12px",
          width: "8px",
          cursor: "w-resize"
        }
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        onMouseDown: e(pe.East),
        style: {
          ...me,
          right: "-4px",
          top: "12px",
          bottom: "12px",
          width: "8px",
          cursor: "e-resize"
        }
      }
    )
  ] });
}
function xa({ label: e, checked: a, onChange: n, disabled: l, title: o, compact: r }) {
  return /* @__PURE__ */ t(
    "label",
    {
      style: {
        display: "flex",
        alignItems: "center",
        padding: r ? "4px 6px" : "8px 10px",
        backgroundColor: a ? "#1e3a5f" : "#1a1a1a",
        border: "1px solid #333",
        borderRadius: "4px",
        cursor: l ? "not-allowed" : "pointer",
        transition: "all 0.2s",
        opacity: l ? 0.5 : 1,
        fontSize: r ? "9px" : "11px"
      },
      title: o,
      children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "checkbox",
            checked: a,
            onChange: (v) => n(v.currentTarget.checked),
            disabled: l,
            style: {
              marginRight: r ? "4px" : "6px",
              cursor: l ? "not-allowed" : "pointer"
            }
          }
        ),
        /* @__PURE__ */ t("span", { style: { color: "#fff", fontWeight: "500" }, children: e })
      ]
    }
  );
}
const Qe = {
  fontSize: "9px",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "#666",
  marginBottom: "6px",
  display: "block"
}, Ye = {
  width: "100%",
  padding: "4px 6px",
  backgroundColor: "#222",
  color: "#fff",
  border: "1px solid #444",
  borderRadius: "4px",
  fontSize: "10px",
  cursor: "pointer",
  marginBottom: "8px"
};
function Ga({
  currentMode: e,
  onModeChange: a,
  currentMobile: n,
  onMobileChange: l,
  inputOnly: o,
  onInputOnlyChange: r,
  inputLayout: i,
  onInputLayoutChange: p,
  density: g,
  onDensityChange: v,
  toggles: c,
  compact: A = !1
}) {
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("label", { style: Qe, children: "Mode" }),
    /* @__PURE__ */ t(
      "select",
      {
        value: e,
        onChange: (y) => a(y.currentTarget.value),
        style: Ye,
        children: [
          /* @__PURE__ */ t("option", { value: "hero", children: "hero" }),
          /* @__PURE__ */ t("option", { value: "primary", children: "primary" }),
          /* @__PURE__ */ t("option", { value: "side", children: "side" }),
          /* @__PURE__ */ t("option", { value: "omni", children: "omni" }),
          /* @__PURE__ */ t("option", { value: "history", children: "history" }),
          /* @__PURE__ */ t("option", { value: "DEFAULT", children: "DEFAULT (deprecated)" }),
          /* @__PURE__ */ t("option", { value: "OMNI", children: "OMNI (deprecated)" }),
          /* @__PURE__ */ t("option", { value: "HISTORY", children: "HISTORY (deprecated)" })
        ]
      }
    ),
    /* @__PURE__ */ t("label", { style: Qe, children: "Density" }),
    /* @__PURE__ */ t(
      "select",
      {
        value: g,
        onChange: (y) => v(y.currentTarget.value),
        style: Ye,
        children: [
          /* @__PURE__ */ t("option", { value: "normal", children: "normal" }),
          /* @__PURE__ */ t("option", { value: "condensed", children: "condensed" })
        ]
      }
    ),
    /* @__PURE__ */ t("label", { style: Qe, children: "Mobile" }),
    /* @__PURE__ */ t(
      "select",
      {
        value: n,
        onChange: (y) => l(y.currentTarget.value),
        style: Ye,
        children: [
          /* @__PURE__ */ t("option", { value: "VIEWPORT", children: "VIEWPORT" }),
          /* @__PURE__ */ t("option", { value: "ALWAYS", children: "ALWAYS" }),
          /* @__PURE__ */ t("option", { value: "NEVER", children: "NEVER" })
        ]
      }
    ),
    /* @__PURE__ */ t("label", { style: Qe, children: "Input Layout" }),
    /* @__PURE__ */ t(
      "select",
      {
        value: i,
        onChange: (y) => p(y.currentTarget.value),
        style: Ye,
        children: [
          /* @__PURE__ */ t("option", { value: "auto", children: "Auto" }),
          /* @__PURE__ */ t("option", { value: "expanded", children: "Expanded" }),
          /* @__PURE__ */ t("option", { value: "compact", children: "Compact" })
        ]
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: A ? "4px" : "6px" },
        children: [
          /* @__PURE__ */ t(
            xa,
            {
              label: "Input Only (deprecated)",
              checked: o,
              onChange: r,
              title: "Deprecated: use mode='hero' instead. Renders only the input bar without the message list or header.",
              compact: A
            }
          ),
          c.map((y, S) => {
            if (y.showWhenPreviousChecked && !c[S - 1]?.checked)
              return null;
            const O = A && y.compactLabel ? y.compactLabel : y.label;
            return /* @__PURE__ */ t(
              xa,
              {
                label: O,
                checked: y.checked,
                onChange: y.onChange,
                disabled: y.disabled,
                title: y.title,
                compact: A
              },
              y.label
            );
          })
        ]
      }
    )
  ] });
}
const Oe = {
  color: "#888",
  fontSize: "10px",
  fontWeight: "bold",
  marginBottom: "8px",
  textTransform: "uppercase"
}, Ca = {
  width: "100%",
  padding: "6px 8px",
  backgroundColor: "#222",
  color: "#fff",
  border: "1px solid #444",
  borderRadius: "4px",
  fontSize: "11px",
  cursor: "pointer",
  marginBottom: "6px"
};
function Ji({
  showComponentSettings: e,
  thread: a,
  theme: n,
  onLoadStaticSuggestions: l,
  currentMode: o,
  onModeChange: r,
  currentMobile: i,
  onMobileChange: p,
  inputOnly: g,
  onInputOnlyChange: v,
  inputLayout: c,
  onInputLayoutChange: A,
  density: y,
  onDensityChange: S,
  toggles: O,
  language: R,
  onLanguageChange: k
}) {
  const {
    threadId: V,
    newThreadMessage: f,
    onNewThreadMessageChange: x,
    onCreateThread: T,
    onCreateThreadUserOnly: B,
    onClearPersistedThreads: q
  } = a, { currentTheme: F, onThemeChange: z } = n;
  let P = null;
  e && (P = /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { style: Oe, children: "Component Settings" }),
    /* @__PURE__ */ t(
      Ga,
      {
        currentMode: o,
        onModeChange: r,
        currentMobile: i,
        onMobileChange: p,
        inputOnly: g,
        onInputOnlyChange: v,
        inputLayout: c,
        onInputLayoutChange: A,
        density: y,
        onDensityChange: S,
        toggles: O
      }
    )
  ] }));
  let K;
  return V ? K = /* @__PURE__ */ t(
    "div",
    {
      style: {
        padding: "6px 8px",
        backgroundColor: "#2a3a2a",
        borderRadius: "4px",
        fontSize: "10px",
        color: "#6b8",
        display: "flex",
        alignItems: "center",
        gap: "6px"
      },
      children: [
        /* @__PURE__ */ t("span", { children: "✓" }),
        /* @__PURE__ */ t("span", { style: { flex: 1, overflow: "hidden", textOverflow: "ellipsis" }, children: V })
      ]
    }
  ) : K = /* @__PURE__ */ t(ye, { children: [
    /* @__PURE__ */ t(
      "input",
      {
        type: "text",
        placeholder: "Message for new thread (optional)...",
        value: f,
        onInput: (te) => x(te.currentTarget.value),
        style: { ...tt, marginBottom: "8px" },
        onKeyDown: (te) => {
          te.key === "Enter" && B();
        }
      }
    ),
    /* @__PURE__ */ t("div", { style: { display: "flex", gap: "4px" }, children: [
      /* @__PURE__ */ t("button", { onClick: T, style: { ...ne, flex: 1 }, children: "Create Thread" }),
      /* @__PURE__ */ t("button", { onClick: B, style: { ...ne, flex: 1 }, children: "User Only" })
    ] })
  ] }), /* @__PURE__ */ t("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: [
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ t("div", { style: Oe, children: "Thread" }),
      K,
      /* @__PURE__ */ t("button", { onClick: q, style: ne, children: "Clear Persisted Threads" })
    ] }),
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ t("div", { style: Oe, children: "Theme" }),
      /* @__PURE__ */ t(
        "select",
        {
          value: F,
          onChange: z,
          style: {
            ...Ca
          },
          children: [
            /* @__PURE__ */ t("option", { value: "", children: "-- Select a theme --" }),
            /* @__PURE__ */ t("option", { value: "coral-light", children: "HDS Coral Light" }),
            /* @__PURE__ */ t("option", { value: "coral-dark", children: "HDS Coral Dark" }),
            /* @__PURE__ */ t("option", { value: "polaris-light", children: "HDS Polaris Light" }),
            /* @__PURE__ */ t("option", { value: "polaris-dark", children: "HDS Polaris Dark" }),
            /* @__PURE__ */ t("option", { value: "janus-light", children: "Janus Light" }),
            /* @__PURE__ */ t("option", { value: "janus-dark", children: "Janus Dark" })
          ]
        }
      ),
      /* @__PURE__ */ t(
        "a",
        {
          href: "/manage-tokens/index.html",
          target: "_blank",
          rel: "noopener noreferrer",
          style: ne,
          children: "🔗 Theme Token Manager"
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ t("div", { style: Oe, children: "Suggestions" }),
      /* @__PURE__ */ t("button", { onClick: l, style: ne, children: "Load Static Suggestions" })
    ] }),
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ t("div", { style: Oe, children: "Language" }),
      /* @__PURE__ */ t("select", { value: R, onChange: k, style: Ca, children: [
        /* @__PURE__ */ t("option", { value: "en", children: "English" }),
        /* @__PURE__ */ t("option", { value: "es", children: "Spanish (Español)" })
      ] })
    ] }),
    P
  ] });
}
function Xi({ threadId: e }) {
  const a = e ? "#14532d" : "#333", n = e ? "#86efac" : "#888", l = e ?? "No thread";
  return /* @__PURE__ */ t("div", { style: Ni, children: [
    /* @__PURE__ */ t("span", { style: { color: "#666" }, children: "Thread:" }),
    /* @__PURE__ */ t(
      "span",
      {
        style: {
          ...Li,
          backgroundColor: a,
          color: n
        },
        title: e ?? void 0,
        children: l
      }
    )
  ] });
}
const ja = {
  fontSize: "9px",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "#666",
  marginBottom: "4px"
}, Zi = {
  width: "100%",
  padding: "4px 6px",
  backgroundColor: "#222",
  color: "#fff",
  border: "1px solid #444",
  borderRadius: "4px",
  fontSize: "10px",
  cursor: "pointer"
}, el = {
  ...tt,
  fontSize: "10px",
  padding: "4px 6px"
}, $e = {
  ...ne,
  fontSize: "9px",
  padding: "4px 6px"
};
function Je({
  label: e,
  headerExtra: a,
  children: n,
  defaultExpanded: l = !1
}) {
  const [o, r] = L(l);
  let i = null;
  return o && (i = n), /* @__PURE__ */ t("div", { style: qa, children: [
    /* @__PURE__ */ t(
      "div",
      {
        style: {
          ...ja,
          marginBottom: o ? "6px" : "0",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          userSelect: "none"
        },
        onClick: () => r((p) => !p),
        children: [
          /* @__PURE__ */ t("span", { style: { fontSize: "8px", color: "#555", width: "10px" }, children: o ? "▼" : "▶" }),
          e,
          a
        ]
      }
    ),
    i
  ] });
}
function tl({
  width: e,
  quickActions: a,
  onActionClick: n,
  thread: l,
  onLoadStaticSuggestions: o,
  currentLogLevel: r,
  onLogLevelChange: i,
  onDisable: p,
  currentMode: g,
  onModeChange: v,
  currentMobile: c,
  onMobileChange: A,
  inputOnly: y,
  onInputOnlyChange: S,
  inputLayout: O,
  onInputLayoutChange: R,
  density: k,
  onDensityChange: V,
  toggles: f
}) {
  const {
    threadId: x,
    newThreadMessage: T,
    onNewThreadMessageChange: B,
    onCreateThread: q,
    onCreateThreadUserOnly: F,
    onClearPersistedThreads: z
  } = l, P = x ? `${x.slice(0, 20)}${x.length > 20 ? "…" : ""}` : "No thread", K = x ? "#14532d" : "#333", te = x ? "#86efac" : "#888";
  let le = null;
  a.length > 0 && (le = /* @__PURE__ */ t("div", { style: qa, children: [
    /* @__PURE__ */ t(
      "div",
      {
        style: {
          ...ja,
          marginBottom: "8px"
        },
        children: "Quick Actions"
      }
    ),
    /* @__PURE__ */ t(
      Ie,
      {
        actions: a,
        showGroupHeaders: !1,
        onActionClick: n,
        columns: 3
      }
    )
  ] }));
  let de;
  return x ? de = /* @__PURE__ */ t(
    "div",
    {
      style: {
        padding: "6px 10px",
        borderRadius: "10px",
        fontSize: "10px",
        fontWeight: "500",
        backgroundColor: K,
        color: te,
        textAlign: "center",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      },
      title: x,
      children: [
        "● ",
        P
      ]
    }
  ) : de = /* @__PURE__ */ t(ye, { children: [
    /* @__PURE__ */ t(
      "input",
      {
        type: "text",
        placeholder: "Message (optional)...",
        value: T,
        onInput: (ce) => B(ce.currentTarget.value),
        style: { ...el, marginBottom: "4px" },
        onKeyDown: (ce) => {
          ce.key === "Enter" && F();
        }
      }
    ),
    /* @__PURE__ */ t("div", { style: { display: "flex", gap: "4px" }, children: [
      /* @__PURE__ */ t("button", { onClick: q, style: { ...$e, flex: 1 }, children: "Create" }),
      /* @__PURE__ */ t("button", { onClick: F, style: { ...$e, flex: 1 }, children: "User Only" })
    ] })
  ] }), /* @__PURE__ */ t(
    "div",
    {
      style: {
        flex: `0 0 ${e}px`,
        backgroundColor: "#1f1f1f",
        borderRight: "1px solid #333",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        padding: "12px",
        gap: "12px"
      },
      children: [
        le,
        /* @__PURE__ */ t(Je, { label: "Thread", children: [
          de,
          /* @__PURE__ */ t(
            "button",
            {
              onClick: z,
              style: { ...$e, marginTop: "4px" },
              children: "Clear Persisted"
            }
          )
        ] }),
        /* @__PURE__ */ t(Je, { label: "Suggestions", children: /* @__PURE__ */ t("button", { onClick: o, style: $e, children: "Load Static Suggestions" }) }),
        /* @__PURE__ */ t(Je, { label: "Log Level", defaultExpanded: !0, children: /* @__PURE__ */ t("select", { value: r, onChange: i, style: Zi, children: [
          /* @__PURE__ */ t("option", { value: De.ERROR, children: "ERROR" }),
          /* @__PURE__ */ t("option", { value: De.WARN, children: "WARN" }),
          /* @__PURE__ */ t("option", { value: De.INFO, children: "INFO" }),
          /* @__PURE__ */ t("option", { value: De.DEBUG, children: "DEBUG" }),
          /* @__PURE__ */ t("option", { value: De.VERBOSE, children: "VERBOSE" })
        ] }) }),
        /* @__PURE__ */ t(Je, { label: "Settings", defaultExpanded: !0, children: /* @__PURE__ */ t(
          Ga,
          {
            currentMode: g,
            onModeChange: v,
            currentMobile: c,
            onMobileChange: A,
            inputOnly: y,
            onInputOnlyChange: S,
            inputLayout: O,
            onInputLayoutChange: R,
            density: k,
            onDensityChange: V,
            toggles: f,
            compact: !0
          }
        ) }),
        /* @__PURE__ */ t("div", { style: { marginTop: "auto" }, children: /* @__PURE__ */ t("button", { onClick: p, style: Pa, children: "Disable" }) })
      ]
    }
  );
}
function al({
  panelWidth: e,
  searchQuery: a,
  onSearchQueryChange: n,
  quickActions: l,
  onActionClick: o,
  sidebar: r,
  activeTab: i,
  onTabChange: p,
  children: g,
  commandPalette: v
}) {
  const { onWidthChange: c, ...A } = r, S = Oa(e) === "wide", O = !S && l.length > 0, R = X(null), k = h(
    (T) => {
      T.preventDefault(), R.current = { startX: T.clientX, startWidth: r.width };
      const B = (F) => {
        if (!R.current)
          return;
        const z = F.clientX - R.current.startX, P = Math.min(
          Nn,
          Math.max(Ln, R.current.startWidth + z)
        );
        c(P);
      }, q = () => {
        R.current = null, document.removeEventListener("mousemove", B), document.removeEventListener("mouseup", q);
      };
      document.addEventListener("mousemove", B), document.addEventListener("mouseup", q);
    },
    [r.width, c]
  );
  let V = null;
  v.isOpen && (V = /* @__PURE__ */ t(
    Ua,
    {
      actions: v.allActions,
      quickActions: l,
      onActionClick: o,
      onClose: v.onClose
    }
  ));
  let f = null;
  O && (f = /* @__PURE__ */ t(
    "div",
    {
      style: {
        padding: "8px 12px",
        borderBottom: "1px solid #333",
        backgroundColor: "#1f1f1f",
        flexShrink: 0
      },
      children: /* @__PURE__ */ t(
        Ie,
        {
          actions: l,
          showGroupHeaders: !1,
          onActionClick: o,
          columns: 3
        }
      )
    }
  ));
  let x = null;
  return S && (x = /* @__PURE__ */ t(ye, { children: [
    /* @__PURE__ */ t(
      tl,
      {
        ...A,
        quickActions: l,
        onActionClick: o
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        onMouseDown: k,
        style: {
          flex: "0 0 4px",
          cursor: "col-resize",
          backgroundColor: "transparent",
          transition: "background-color 0.15s"
        },
        onMouseEnter: (T) => {
          T.currentTarget.style.backgroundColor = "#555";
        },
        onMouseLeave: (T) => {
          T.currentTarget.style.backgroundColor = "transparent";
        },
        title: "Drag to resize sidebar"
      }
    )
  ] })), /* @__PURE__ */ t(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflow: "hidden",
        minHeight: 0,
        position: "relative"
      },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            style: {
              padding: "8px 12px",
              borderBottom: "1px solid #333",
              flexShrink: 0,
              display: "flex",
              gap: "8px",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ t(
                "input",
                {
                  type: "text",
                  placeholder: "Search actions...",
                  value: a,
                  onChange: n,
                  style: { ..._i, flex: 1 }
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: v.onOpen,
                  style: {
                    padding: "6px 10px",
                    backgroundColor: "#333",
                    color: "#888",
                    border: "1px solid #444",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "11px",
                    whiteSpace: "nowrap",
                    flexShrink: 0
                  },
                  title: "Command Palette (Cmd+K)",
                  children: "⌘K"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t("div", { style: { display: "flex", flex: 1, overflow: "hidden", minHeight: 0 }, children: [
          x,
          /* @__PURE__ */ t(
            "div",
            {
              style: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
                minHeight: 0
              },
              children: [
                f,
                /* @__PURE__ */ t(
                  "div",
                  {
                    style: {
                      display: "flex",
                      borderBottom: "1px solid #333",
                      backgroundColor: "#1f1f1f",
                      flexShrink: 0,
                      position: "sticky",
                      top: 0,
                      zIndex: 1
                    },
                    children: Ia.map((T) => /* @__PURE__ */ t(
                      "button",
                      {
                        onClick: () => p(T.id),
                        style: {
                          ...Ii,
                          backgroundColor: i === T.id ? "#2a2a2a" : "transparent",
                          borderBottom: i === T.id ? "2px solid #3b82f6" : "2px solid transparent"
                        },
                        children: [
                          /* @__PURE__ */ t("span", { style: { marginRight: "4px" }, children: T.icon }),
                          T.label
                        ]
                      },
                      T.id
                    ))
                  }
                ),
                /* @__PURE__ */ t("div", { style: { padding: "16px" }, children: g })
              ]
            }
          )
        ] }),
        !S && /* @__PURE__ */ t("div", { style: { padding: "8px 12px", borderTop: "1px solid #333", flexShrink: 0 }, children: /* @__PURE__ */ t("button", { onClick: r.onDisable, style: Pa, children: "Disable" }) }),
        /* @__PURE__ */ t(Xi, { threadId: r.thread.threadId }),
        V
      ]
    }
  );
}
function ol() {
  const { state: e, actions: a } = Ta(), [n, l] = L(""), [o, r] = L(""), [i, p] = L(""), [g, v] = L(!1), [c, A] = L(zn.language), [y, S] = L(() => Wn()), [O, R] = L(
    () => fa.getDefaultTheme()
  ), {
    leftSidebar: k,
    showViewToggleButton: V,
    setShowViewToggleButton: f,
    showCloseButton: x,
    setShowCloseButton: T,
    showHistoryButton: B,
    setShowHistoryButton: q,
    showConversationTitle: F,
    setShowConversationTitle: z,
    inputOnly: P,
    setInputOnly: K,
    inputLayout: te,
    setInputLayout: le,
    showChatPanelToggle: de,
    setShowChatPanelToggle: ce,
    branding: Ee,
    setBranding: Re
  } = ui(), [D, Q] = L(Hn), ue = D.searchQuery, Be = h((d) => {
    Q((m) => ({ ...m, searchQuery: d }));
  }, []), xe = D.activeTab, at = h((d) => {
    Q((m) => ({ ...m, activeTab: d }));
  }, []), nt = D.sidebarWidth, it = h((d) => {
    Q((m) => ({ ...m, sidebarWidth: d }));
  }, []), Ce = X(null), lt = Dn(), { effectiveBounds: ae } = Si({
    persistedBounds: D,
    windowSize: lt
  }), ot = D.isExpanded ? ae.width : Ct, rt = D.isExpanded ? ae.height : _a, We = Oa(ae.width), st = We === "wide", { isDragging: He, isResizing: dt, targetContainerRef: ct, onDragStart: ut, onResizeStart: u } = bi({
    minWidth: ka,
    minHeight: Sa,
    startingTargetBounds: {
      x: ae.x,
      y: ae.y,
      width: ot,
      height: rt
    },
    onPositionOrSizeChange: (d) => {
      Q((m) => m.isExpanded ? {
        ...m,
        x: d.x,
        y: d.y,
        width: d.width,
        height: d.height
      } : {
        ...m,
        x: d.x,
        y: d.y
      });
    }
  }), b = Rt(Mn), E = Et(), U = D.useAllConversationOptions;
  H(() => {
    E(
      ra({
        webSearchEnabled: U
      })
    );
  }, [E, U]);
  const fe = h((d) => {
    Q((m) => ({ ...m, useAllConversationOptions: d }));
  }, []), Ne = D.voiceInputEnabled;
  H(() => {
    E(ra({ voiceInputEnabled: Ne })), a.setEnableVoiceInput(Ne);
  }, [E, Ne, a]);
  const Qa = h((d) => {
    Q((m) => ({ ...m, voiceInputEnabled: d }));
  }, []), Dt = h(
    (d) => {
      a.setMode(d), Q((m) => ({ ...m, mode: d }));
    },
    [a]
  ), { mobileMode: Mt, setMobileMode: pt } = On(), Ot = h(
    (d) => {
      pt(d), Q((m) => ({ ...m, mobile: d }));
    },
    [pt]
  ), Vt = h(
    (d) => {
      K(d), a.setMode(d ? "hero" : "primary");
    },
    [a, K]
  ), Pt = h(
    (d) => {
      le(d), a.setInputLayout(d), Q((m) => ({ ...m, inputLayout: d }));
    },
    [a, le]
  ), Bt = h(
    (d) => {
      a.setDensity(d), Q((m) => ({ ...m, density: d }));
    },
    [a]
  ), Ya = h(
    (d) => {
      T(d), Q((m) => ({ ...m, showCloseButton: d }));
    },
    [T]
  ), $a = h(
    (d) => {
      q(d), Q((m) => ({ ...m, showHistoryButton: d }));
    },
    [q]
  ), { rootRef: Te } = we();
  mi(Te);
  const Wt = D.mode;
  H(
    () => {
      Wt && a.setMode(Wt);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Intentionally empty deps: one-time sync of initial config to context on mount
    []
  );
  const Ht = D.mobile;
  H(
    () => {
      Ht && pt(Ht);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Intentionally empty deps: one-time sync of initial config to context on mount
    []
  );
  const ht = D.inputLayout;
  H(
    () => {
      ht !== void 0 && (le(ht), a.setInputLayout(ht));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Intentionally empty deps: one-time sync of initial config to context on mount
    []
  );
  const qt = D.density;
  H(
    () => {
      qt !== void 0 && a.setDensity(qt);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Intentionally empty deps: one-time sync of initial config to context on mount
    []
  );
  const Kt = D.showCloseButton;
  H(
    () => {
      Kt !== void 0 && T(Kt);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Intentionally empty deps: one-time sync of initial config to context on mount
    []
  );
  const Ut = D.showHistoryButton;
  H(
    () => {
      Ut !== void 0 && q(Ut);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Intentionally empty deps: one-time sync of initial config to context on mount
    []
  );
  const Le = e.mode, Ft = e.density, Ja = e.disableHeader, Xa = e.hasOpenedInteractiveView;
  H(() => {
    const d = se(Te);
    d && d.mode !== Le && (d.mode = Le);
  }, [Le, Te]);
  const Gt = (d) => {
    Q((m) => {
      if (m.isExpanded === d)
        return m;
      let G = { x: m.x, y: m.y };
      return d ? (Ce.current = { x: m.x, y: m.y }, G = At({
        x: m.x,
        y: m.y,
        width: m.width,
        height: m.height,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      })) : Ce.current && (G = Ce.current, Ce.current = null), { ...m, isExpanded: d, x: G.x, y: G.y };
    });
  }, jt = X(D.isExpanded);
  jt.current = D.isExpanded;
  const Qt = X(g);
  Qt.current = g, H(() => {
    Vn(D);
  }, [D]), H(() => {
    const d = (m) => {
      if ((m.metaKey || m.ctrlKey) && m.key === "k") {
        m.preventDefault(), v((G) => !G);
        return;
      }
      if (m.key === "Escape") {
        if (Qt.current) {
          m.preventDefault(), v(!1);
          return;
        }
        jt.current && (m.preventDefault(), Gt(!1));
      }
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, []);
  const Za = h((d) => {
    const m = d.currentTarget.value;
    R(m), fa.installTheme(m);
  }, []), en = h((d) => {
    const m = Number(d.currentTarget.value);
    qn(m), S(m);
  }, []), Yt = h(
    (d) => {
      const m = d.currentTarget.value;
      if (A(m), m === "en") {
        window.__TRANSLATIONS__ = void 0;
        const G = se(Te);
        G && (G.language = m);
      } else
        Fn(/* @__PURE__ */ Object.assign({ "../../i18n/locales/ar/translation.json": () => import("./translation-IYIIsIzb.js"), "../../i18n/locales/cs/translation.json": () => import("./translation-COi1TKL8.js"), "../../i18n/locales/de/translation.json": () => import("./translation-TNtYyWBC.js"), "../../i18n/locales/en/translation.json": () => import("./WidgetRenderer-C4Xp1hhZ.js").then((G) => G.fi), "../../i18n/locales/es-419/translation.json": () => import("./translation-BPfkvvOc.js"), "../../i18n/locales/es/translation.json": () => import("./translation-BIhWvcdr.js"), "../../i18n/locales/fi/translation.json": () => import("./translation-Bg27j7Xd.js"), "../../i18n/locales/fr-CA/translation.json": () => import("./translation-CLhRE0Cd.js"), "../../i18n/locales/fr/translation.json": () => import("./translation-DYPzVlfb.js"), "../../i18n/locales/he/translation.json": () => import("./translation-BdmGRcB1.js"), "../../i18n/locales/hu/translation.json": () => import("./translation-6e9dQR9c.js"), "../../i18n/locales/it/translation.json": () => import("./translation-BjbXplWn.js"), "../../i18n/locales/ja/translation.json": () => import("./translation-DJxs5EJ6.js"), "../../i18n/locales/ko/translation.json": () => import("./translation-BX_BIYtC.js"), "../../i18n/locales/nb/translation.json": () => import("./translation-CwQ2MZ3Z.js"), "../../i18n/locales/nl/translation.json": () => import("./translation-DttDRtYO.js"), "../../i18n/locales/pl/translation.json": () => import("./translation-CLZHMxkk.js"), "../../i18n/locales/pt-BR/translation.json": () => import("./translation-B5JT1dac.js"), "../../i18n/locales/pt/translation.json": () => import("./translation-kC8rDAab.js"), "../../i18n/locales/ru/translation.json": () => import("./translation-Bw4n67ka.js"), "../../i18n/locales/sv/translation.json": () => import("./translation-D8pCcEBB.js"), "../../i18n/locales/th/translation.json": () => import("./translation-BVhCbUsk.js"), "../../i18n/locales/tr/translation.json": () => import("./translation-BrWObAqd.js"), "../../i18n/locales/zh-TW/translation.json": () => import("./translation-8rBZ08eR.js"), "../../i18n/locales/zh/translation.json": () => import("./translation-CRoOGz-r.js") }), `../../i18n/locales/${m}/translation.json`, 6).then((G) => {
          window.__TRANSLATIONS__ = G.default;
          const Ue = se(Te);
          Ue && (Ue.language = m);
        });
    },
    [Te]
  ), {
    handleCreateNewThread: tn,
    handleCreateNewThreadUserOnly: an,
    handleDisableTestHarness: nn,
    actionHandlers: ie
  } = Ci({
    threadId: b,
    customMessage: n,
    setCustomMessage: l,
    newThreadMessage: i,
    setNewThreadMessage: p
  }), { usageCounts: ln, incrementUsage: ke } = ri(), Se = oi(ie), gt = (d) => {
    const m = ln[d.id] ?? 0, G = d.isDefaultQuickAction ? Bn : 0;
    return m + G;
  }, $t = [...Se].sort((d, m) => gt(m) - gt(d)).filter((d) => gt(d) > 0).slice(0, Pn), qe = h(() => ue ? Se.map((d) => {
    const m = Ze(ue, d.label), G = d.group ? Ze(ue, d.group) : -1, Ue = m >= 0 ? m : G >= 0 ? G * 0.5 : -1;
    return { action: d, score: Ue };
  }).filter((d) => d.score >= 0).sort((d, m) => m.score - d.score).map((d) => d.action) : Se.filter((d) => d.tab === xe), [Se, ue, xe])(), Ke = (d) => xe === d && !ue, on = h(
    (d) => {
      Be(d.currentTarget.value);
    },
    [Be]
  ), rn = h((d) => {
    l(d.currentTarget.value);
  }, []), sn = h(
    (d) => {
      d.key === "Enter" && ie.handleSendUserMessage();
    },
    [ie]
  ), dn = D.isExpanded ? `${ae.width}px` : `${Ct}px`, cn = D.isExpanded ? `${ae.height}px` : "auto", un = h(() => v(!0), []), Jt = h(() => v(!1), []), Xt = [
    {
      label: "No Header",
      checked: Ja,
      onChange: (d) => a.setDisableHeader(d),
      title: "Hides the header bar of the chat component"
    },
    {
      label: "Chat Panel Toggle",
      compactLabel: "Panel Tgl",
      checked: de,
      onChange: ce,
      title: "Show the toggle button in the input bar to open the chat panel"
    },
    {
      label: "Panel Icon",
      compactLabel: "Panel Icon",
      checked: Ee.backButtonIcon === "panel",
      onChange: (d) => Re((m) => ({ ...m, backButtonIcon: d ? "panel" : "back" })),
      title: "Use the panel-collapse icon for the back button (default: chevron). Only visible in Input Only mode."
    },
    {
      label: "Managed Sidebar",
      compactLabel: "Managed SB",
      checked: k.isManaged,
      onChange: k.setIsManaged,
      title: "Externally control the left sidebar open/close state"
    },
    {
      label: "Sidebar Opened",
      compactLabel: "SB Opened",
      checked: k.value,
      onChange: k.setValue,
      title: "Set the left sidebar open/close state (only when managed)",
      showWhenPreviousChecked: !0
    },
    {
      label: "View Toggle Button",
      compactLabel: "View Toggle",
      checked: V,
      onChange: f,
      title: "Show/hide the view-toggle button in the header"
    },
    {
      label: "Close Button",
      compactLabel: "Close Btn",
      checked: x,
      onChange: Ya,
      title: "Show/hide the close button in the header"
    },
    {
      label: "History Button",
      compactLabel: "History Btn",
      checked: B,
      onChange: $a,
      title: "Show/hide the history button in the header"
    },
    {
      label: "Conv. Title",
      checked: F,
      onChange: z,
      title: "Show/hide the conversation title in the header"
    },
    {
      label: "Interactive View",
      compactLabel: "Int. View",
      checked: Xa,
      onChange: a.setHasOpenedInteractiveView,
      title: "Simulate whether the interactive view has been opened"
    },
    {
      label: "All Conv. Options",
      compactLabel: "All Opts",
      checked: U,
      onChange: fe,
      title: "Enable all conversation options (web search, etc.)"
    },
    {
      label: "Voice Input",
      checked: Ne,
      onChange: Qa,
      title: "Show mic button (drives both the admin flag and the enable-voice-input user pref)"
    }
  ], Zt = {
    threadId: b,
    newThreadMessage: i,
    onNewThreadMessageChange: p,
    onCreateThread: tn,
    onCreateThreadUserOnly: an,
    onClearPersistedThreads: ie.handleClearPersistedThreads
  }, ea = {
    currentTheme: O,
    onThemeChange: Za
  }, pn = {
    width: nt,
    onWidthChange: it,
    thread: Zt,
    theme: ea,
    onLoadStaticSuggestions: ie.handleLoadStaticSuggestions,
    currentLogLevel: y,
    onLogLevelChange: en,
    language: c,
    onLanguageChange: Yt,
    onDisable: nn,
    currentMode: Le,
    onModeChange: Dt,
    currentMobile: Mt,
    onMobileChange: Ot,
    inputOnly: P,
    onInputOnlyChange: Vt,
    inputLayout: te,
    onInputLayoutChange: Pt,
    density: Ft,
    onDensityChange: Bt,
    toggles: Xt
  }, hn = {
    isOpen: g,
    onOpen: un,
    onClose: Jt,
    allActions: Se
  };
  let ta = null;
  st || (ta = /* @__PURE__ */ t("div", { style: yt, children: [
    /* @__PURE__ */ t("div", { style: vt, children: /* @__PURE__ */ t("span", { children: "Settings" }) }),
    /* @__PURE__ */ t(
      Ji,
      {
        showComponentSettings: !0,
        thread: Zt,
        theme: ea,
        onLoadStaticSuggestions: ie.handleLoadStaticSuggestions,
        currentMode: Le,
        onModeChange: Dt,
        currentMobile: Mt,
        onMobileChange: Ot,
        inputOnly: P,
        onInputOnlyChange: Vt,
        inputLayout: te,
        onInputLayoutChange: Pt,
        density: Ft,
        onDensityChange: Bt,
        toggles: Xt,
        language: c,
        onLanguageChange: Yt
      }
    )
  ] }));
  let aa = null;
  ue && (aa = /* @__PURE__ */ t(
    Ie,
    {
      actions: qe,
      showGroupHeaders: !1,
      onActionClick: ke
    }
  ));
  let na = null;
  D.isExpanded && (na = /* @__PURE__ */ t($i, { onResizeStart: u }));
  let ze = null;
  Ke("content") ? ze = /* @__PURE__ */ t(ye, { children: [
    /* @__PURE__ */ t("div", { style: { marginBottom: "16px" }, children: [
      /* @__PURE__ */ t(
        "label",
        {
          style: {
            display: "block",
            fontSize: "10px",
            color: "#888",
            fontWeight: "bold",
            marginBottom: "6px",
            textTransform: "uppercase"
          },
          children: "Custom Message"
        }
      ),
      /* @__PURE__ */ t(
        "input",
        {
          type: "text",
          placeholder: b ? "Type a custom message..." : "Create a thread first...",
          value: n,
          onChange: rn,
          disabled: !b,
          style: {
            ...tt,
            marginBottom: "8px",
            opacity: b ? 1 : 0.5
          },
          onKeyDown: sn
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: ie.handleSendUserMessage,
          disabled: !b || !n.trim(),
          style: {
            ...ne,
            opacity: b && n.trim() ? 1 : 0.5,
            cursor: b && n.trim() ? "pointer" : "not-allowed"
          },
          children: "Send Message"
        }
      )
    ] }),
    /* @__PURE__ */ t(Ie, { actions: qe, onActionClick: ke })
  ] }) : Ke("widgets") ? ze = /* @__PURE__ */ t(Ie, { actions: qe, onActionClick: ke }) : Ke("events") ? ze = /* @__PURE__ */ t(ye, { children: [
    /* @__PURE__ */ t("div", { style: { marginBottom: "16px" }, children: [
      /* @__PURE__ */ t(
        "label",
        {
          style: {
            display: "block",
            fontSize: "10px",
            color: "#888",
            fontWeight: "bold",
            marginBottom: "6px",
            textTransform: "uppercase"
          },
          children: "Thread Title"
        }
      ),
      /* @__PURE__ */ t("div", { style: { display: "flex", gap: "4px" }, children: [
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            placeholder: b ? "Enter thread title..." : "Create a thread first...",
            value: o,
            onChange: (d) => r(d.currentTarget.value),
            disabled: !b,
            style: {
              ...tt,
              flex: 1,
              marginBottom: 0,
              opacity: b ? 1 : 0.5
            },
            onKeyDown: (d) => {
              d.key !== "Enter" || !o.trim() || (ie.handleThreadTitleUpdate(o.trim()), r(""));
            }
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: () => {
              o.trim() && (ie.handleThreadTitleUpdate(o.trim()), r(""));
            },
            disabled: !b || !o.trim(),
            style: {
              ...ne,
              width: "auto",
              marginBottom: 0,
              opacity: b && o.trim() ? 1 : 0.5,
              cursor: b && o.trim() ? "pointer" : "not-allowed"
            },
            children: "Update Title"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t(Ie, { actions: qe, onActionClick: ke })
  ] }) : Ke("devtools") && (ze = /* @__PURE__ */ t(
    "div",
    {
      style: We === "wide" ? {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px"
      } : {
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      },
      children: [
        /* @__PURE__ */ t("div", { style: yt, children: [
          /* @__PURE__ */ t("div", { style: vt, children: /* @__PURE__ */ t("span", { children: "SSE Event Replay" }) }),
          /* @__PURE__ */ t(Yi, { onReplaySSEEvents: ie.handleReplaySSEEvents })
        ] }),
        /* @__PURE__ */ t("div", { style: yt, children: [
          /* @__PURE__ */ t("div", { style: vt, children: /* @__PURE__ */ t("span", { children: "Raw JSON Widget" }) }),
          /* @__PURE__ */ t(Gi, { threadId: b, onSendRawJsonWidget: ie.handleRawJsonWidget })
        ] }),
        ta
      ]
    }
  ));
  let ia = null;
  D.isExpanded && (ia = /* @__PURE__ */ t(
    al,
    {
      panelWidth: ae.width,
      searchQuery: ue,
      onSearchQueryChange: on,
      quickActions: $t,
      onActionClick: ke,
      sidebar: pn,
      activeTab: xe,
      onTabChange: at,
      commandPalette: hn,
      children: [
        ze,
        aa
      ]
    }
  ));
  let la = null;
  return !D.isExpanded && g && (la = /* @__PURE__ */ t(
    "div",
    {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1e4
      },
      children: /* @__PURE__ */ t(
        Ua,
        {
          actions: Se,
          quickActions: $t,
          onActionClick: ke,
          onClose: Jt
        }
      )
    }
  )), /* @__PURE__ */ t(ye, { children: [
    /* @__PURE__ */ t(Ki, {}),
    /* @__PURE__ */ t(Ui, {}),
    /* @__PURE__ */ t(
      "div",
      {
        ref: ct,
        style: {
          position: "fixed",
          left: `${ae.x}px`,
          top: `${ae.y}px`,
          zIndex: 9999,
          backgroundColor: "#1a1a1a",
          border: "2px solid #333",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          width: dn,
          height: cn,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          userSelect: He || dt ? "none" : "auto",
          animation: "testHarnessFadeIn 0.3s ease-in",
          opacity: 1,
          pointerEvents: "auto"
        },
        children: [
          na,
          /* @__PURE__ */ t(
            "div",
            {
              style: {
                padding: "6px 6px 6px 12px",
                backgroundColor: "#2a2a2a",
                borderBottom: D.isExpanded ? "1px solid #333" : "none",
                cursor: He ? "grabbing" : "grab",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              },
              onMouseDown: ut,
              children: [
                /* @__PURE__ */ t("span", { style: { color: "#fff", fontWeight: "bold", fontSize: "14px" }, children: "Test Harness" }),
                /* @__PURE__ */ t(
                  "span",
                  {
                    style: { color: "#888", cursor: "pointer", padding: "0 10px" },
                    onClick: (d) => {
                      d.stopPropagation(), Gt(!D.isExpanded);
                    },
                    children: D.isExpanded ? "▼" : "▶"
                  }
                )
              ]
            }
          ),
          ia
        ]
      }
    ),
    la
  ] });
}
export {
  ol as TestHarness
};
//# sourceMappingURL=TestHarness-BbWYAwoY.js.map
