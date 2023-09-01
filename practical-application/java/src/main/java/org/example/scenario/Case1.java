package org.example.scenario;

import java.util.ArrayList;
import java.util.List;

class DataExporter {
    private List<String[]> data;

    public DataExporter() {
        data = new ArrayList<>();
    }

    public void addData(String[] rowData) {
        data.add(rowData);
    }

    public void exportToCSV() {
        // Code to export data to CSV format
        for (String[] row : data) {
            for (String cell : row) {
                System.out.print(cell + ",");
            }
            System.out.println();
        }
    }

    public void exportToJSON() {
        // Code to export data to JSON format
        System.out.println("{");
        for (int i = 0; i < data.size(); i++) {
            String[] row = data.get(i);
            System.out.print("  \"Row" + (i + 1) + "\": [");
            for (int j = 0; j < row.length; j++) {
                System.out.print("\"" + row[j] + "\"");
                if (j < row.length - 1) {
                    System.out.print(",");
                }
            }
            System.out.print("]");
            if (i < data.size() - 1) {
                System.out.println(",");
            } else {
                System.out.println();
            }
        }
        System.out.println("}");
    }
}

class DataExportApp {
    public static void main(String[] args) {
        DataExporter exporter = new DataExporter();

        exporter.addData(new String[]{"John", "Doe", "30"});
        exporter.addData(new String[]{"Jane", "Smith", "25"});

        System.out.println("Exporting data to CSV:");
        exporter.exportToCSV();

        System.out.println("\nExporting data to JSON:");
        exporter.exportToJSON();
    }
}
