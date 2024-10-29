import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  carouselContainer: {
    marginVertical: 20,
  },
  imageContainer: {
    width: 80,
    height: 80,
    marginHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  imageEmpty: {
    backgroundColor: "#f0f0f0",
  },
  imageFilled: {
    backgroundColor: "transparent",
  },
  addButtonText: {
    fontSize: 24,
    color: "#999",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  modal_overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  modalContainer: {
    width: 250,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalButton: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "#2196F3",
    borderRadius: 8,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
