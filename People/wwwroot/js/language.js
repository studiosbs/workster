[Object(t["h"])("span", null, Object(t["F"])(r.titles.phone[o.activeLanguage]), 1)], 8, ["href"])]), Object(t["h"])("li", {
    class: "language-toggler",
    onClick: e[9] || (e[9] = function() {
        return o.toggleLanguage && o.toggleLanguage.apply(o, arguments)
    }
    )
}, [Object(t["h"])("div", {
    class: ["lang_ru language-item", {
        active: "uz" == o.activeLanguage
    }]
}, [w, O], 2), Object(t["h"])("div", {
    class: ["lang_uz language-item", {
        active: "ru" == o.activeLanguage
    }]
}, [k, j], 2)])], 2), Object(t["h"])("div", {
    class: ["mobile-overlay", {
        show: r.mobileMenu
    }],
    onClick: e[10] || (e[10] = function() {
        return o.mobileMenuToggle && o.mobileMenuToggle.apply(o, arguments)
    }
    )
}, null, 2), Object(t["h"])("ul", null, [Object(t["h"])("li", {
    class: "language-toggler language-togglerMob",
    onClick: e[11] || (e[11] = function() {
        return o.toggleLanguage && o.toggleLanguage.apply(o, arguments)
    }
    )
}, [Object(t["h"])("div", {
    class: ["lang_ru language-item", {
        active: "uz" == o.activeLanguage
    }]
}, [q, P], 2), Object(t["h"])("div", {
    class: ["lang_uz language-item", {
        active: "ru" == o.activeLanguage
    }]
}, [L, x], 2)])]), Object(t["h"])("button", {
    ref: "burgerMenuButton",
    class: "navigation__button",
    type: "button",
    onClick: e[12] || (e[12] = function() {
        return o.mobileMenuToggle && o.mobileMenuToggle.apply(o, arguments)
    }
    ),
    "aria-label": "MenuBtn"
}, [Object(t["h"])("span", {
    class: ["navigation__button-line navigation__button-line_1", {
        open: r.opened,
        close: !r.opened
    }]
}, null, 2), Object(t["h"])("span", {
    class: ["navigation__button-line navigation__button-line_2", {
        open: r.opened,
        close: !r.opened
    }]
}, null, 2), Object(t["h"])("span", {
    class: ["navigation__button-line navigation__button-line_3", {
        open: r.opened,
        close: !r.opened
    }]
}, null, 2)], 512)])])])
}
var M = {
data: function() {
    return {
        mobileMenu: !1,
        opened: !1,
        mobileCourses: !1,
        dropDownOpened: !1,
        viewportWidth: window.innerWidth,
        courses: [{
            name: {
                ru: "ВЕБ ПРОГРАММИРОВАНИЕ",
                uz: "WEB DASTURLASH"
            },
            id: "web-development"
        }, {
            name: {
                ru: "ИНТЕРНЕТ МАРКЕТИНГ",
                uz: "INTERNET MARKETING"
            },
            id: "internet-marketing"
        }, {
            name: {
                ru: "PRO DESIGN",
                uz: "PRO DESIGN"
            },
            id: "pro-design"
        }, {
            name: {
                ru: "3DS MAX & AUTOCAD ",
                uz: "3DS MAX & AUTOCAD"
            },
            id: "3ds-max&autocad"
        }, {
            name: {
                ru: "PYTHON",
                uz: "PYTHON"
            },
            id: "python"
        }, {
            name: {
                ru: "ВИДЕОМОНТАЖ",
                uz: "VIDEOMONTAJ"
            },
            id: "video-editing"
        }, {
            name: {
                ru: "РАЗРАБОТКА ИГР",
                uz: "O’YINLARNI YARATISH"
            },
            id: "game-development"
        }, {
            name: {
                ru: "SCRATCH",
                uz: "SCRATCH"
            },
            id: "scratch"
        }],
        titles: {
            courses: {
                ru: "КУРСЫ",
                uz: "KURSLAR"
            },
            openLessons: {
                ru: "БЕСПЛАТНЫЙ УРОК",
                uz: "BEPUL DARS"
            },
            coworking: {
                ru: "КОВОРКИНГ",
                uz: "KOVORKING"
            },
            contacts: {
                ru: "КОНТАКТЫ",
                uz: "KONTAKTLAR"
            },
            events: {
                ru: "СОБЫТИЯ",
                uz: "HODISALAR"
            },
            employment: {
                ru: "ТРУДОУСТРОЙСТВО",
                uz: "ISH BILAN YORDAM"
            },
            phone: {
                ru: "позвонить",
                uz: "Qo'ng'iroq qilish"
            },
            href: {
                ru: "tel:+998942103030",
                uz: "tel:+998942104040"
            }
        }
    }
},
methods: Object(r["a"])(Object(r["a"])({}, Object(o["b"])({
    contactButton: "contactButoon"
})), {}, {
    clickContactButton: function() {
        this.contactButton()
    },
    closeNav: function() {
        this.mobileMenu = !1,
        this.opened = !1
    },
    mobileMenuToggle: function() {
        this.opened = !this.opened,
        this.mobileMenu = !this.mobileMenu
    },
    mobileCoursesMenu: function() {
        this.mobileCourses = !this.mobileCourses,
        this.opened = !this.opened
    },
    selectCourse: function() {
        this.opened = !1,
        this.mobileMenu = !1,
        this.dropDownOpened = !1,
        this.mobileCourses = !1
    },
    goToTop: function() {
        window.scrollTo(0, 0)
    },
    toggleLanguage: function() {
        var a = "ru" == this.$route.params.lang || "" == this.$route.params.lang ? "uz" : ""
          , e = this.$route.params.id;
        this.$router.push({
            name: this.$route.name,
            params: e ? {
                id: e,
                lang: a
            } : {
                lang: a
            }
        });
        var i = "ru" == this.$route.params.lang || "" == this.$route.params.lang ? "uz" : "ru";
        this.$store.dispatch("selectLanguage", i)
    },
    toOpenLessons: function() {
        var a = document.getElementById("openlessons");
        "course" != this.$route.name && "home" != this.$route.name ? this.$router.push({
            name: "home",
            params: {
                lang: this.$route.params.lang
            },
            hash: "#openlessons"
        }) : window.scrollTo(0, a.offsetTop)
    }
}),
computed: {
    activeLanguage: function() {
        return this.$store.getters.getLanguage
    }
},
mounted: function() {}
}