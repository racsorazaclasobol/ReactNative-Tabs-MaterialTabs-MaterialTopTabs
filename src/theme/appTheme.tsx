import { StyleSheet } from "react-native";

export const DefaulPaperTheme  = {
    colors: {
        primary: 'rgb(0, 104, 116)',
        onPrimary: 'rgb(255, 255, 255)',
        primaryContainer: 'rgb(151, 240, 255)',
        onPrimaryContainer: 'rgb(0, 31, 36)',
        secondary: 'rgb(74, 98, 103)',
        onSecondary: 'rgb(255, 255, 255)',
        secondaryContainer: 'transparent',
        onSecondaryContainer: 'rgb(5, 31, 35)',
      }
}

export const colores = {
    primary: 'tomato'
};

export const appTheme = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
        marginVertical: 20,
    },

    title: {
        fontSize: 25,
        marginBottom: 10
    },

    botonGrande: {
        width: 100,
        height: 75,
        backgroundColor: 'tomato',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBoton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    avatarContainer: {
        padding: 10,
        alignItems: 'center'
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100
    },

    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 20,
    },

    menuButton: {
        marginVertical: 10
    },

    menuText: {
        fontSize: 15,
    }

});