module com.example.tycoonadventure {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.graphics;


    opens com.example.tycoonadventure to javafx.fxml;
    exports com.example.tycoonadventure;
}