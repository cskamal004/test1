public class Property {
    private Long id;
    private String name;
    private String location;
    private Double price;

    public Property() {
    }

    public Property(Long id, String name, String location, Double price) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}