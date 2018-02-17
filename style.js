import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "Microsoft JhengHei,Lucida Grande,Lucida Sans,Arial,sans-serif",
        "fontSize": 2,
        "textAlign": "center",
        "verticalAlign": "top"
    },
    "a": {
        "color": "#336699"
    },
    "a:hover": {
        "color": "#cc3366"
    },
    "container": {
        "height": 18,
        "left": "50%",
        "marginTop": -9,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": -11.5,
        "position": "absolute",
        "top": "50%",
        "width": 23
    },
    "list_pane": {
        "float": "left",
        "height": 18,
        "width": 10
    },
    "draw_pane": {
        "float": "right",
        "height": 18,
        "width": 13
    },
    "name_list": {
        "fontFamily": "Microsoft JhengHei,Lucida Grande,Lucida Sans,Arial,sans-serif",
        "fontSize": 1,
        "height": 14,
        "width": 7
    },
    "switch": {
        "fontFamily": "Microsoft JhengHei,Lucida Grande,Lucida Sans,Arial,sans-serif",
        "fontSize": 1,
        "fontWeight": "normal",
        "height": 2.4,
        "marginTop": 0.4,
        "width": "100%"
    },
    "draw": {
        "fontSize": 1
    },
    "draw-a": {
        "color": "#cccccc",
        "fontSize": 0.6
    },
    "draw-b": {
        "color": "#999999",
        "fontSize": 0.8
    },
    "draw-c": {
        "border": "1px solid #000000",
        "fontSize": 1
    },
    "footer": {
        "bottom": 0.5,
        "color": "#666666",
        "fontSize": 0.4,
        "position": "fixed",
        "right": 1
    }
});