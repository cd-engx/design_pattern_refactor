package org.example.scenario;

import java.util.List;
import java.util.stream.IntStream;

class PageableResponseVo<T> {
    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    private List<T> data;

    private Integer total;
}

class Item {
    private String itemNumber;

    public String getItemNumber() {
        return itemNumber;
    }

    public void setItemNumber(String itemNumber) {
        this.itemNumber = itemNumber;
    }

}

class Customer {
    private String customerNumber;

    public String getCustomerNumber() {
        return customerNumber;
    }

    public void setCustomerNumber(String customerNumber) {
        this.customerNumber = customerNumber;
    }
}

class ItemService {
    private List<Item> items = IntStream.rangeClosed(1, 333).boxed().map(x -> {
        var item = new Item();
        item.setItemNumber(String.format("I%010d", x));
        return item;
    }).toList();

    public PageableResponseVo<Item> getPageData(int pageNumber, int pageSize) {
        int offset = (pageNumber - 1) * pageSize;
        PageableResponseVo<Item> response = new PageableResponseVo<>();
        response.setData(items.stream().skip(offset).limit(pageSize).toList());
        response.setTotal(items.size());
        return response;
    }
}

class CustomService {
    private List<Customer> customers = IntStream.rangeClosed(1, 120).boxed().map(x -> {
        var item = new Customer();
        item.setCustomerNumber(String.format("C%010d", x));
        return item;
    }).toList();

    public PageableResponseVo<Customer> getPageData(int pageNumber, int pageSize) {
        int offset = (pageNumber - 1) * pageSize;
        PageableResponseVo<Customer> response = new PageableResponseVo<>();
        response.setData(customers.stream().skip(offset).limit(pageSize).toList());
        response.setTotal(customers.size());
        return response;
    }
}


class ItemPrinter {
    private ItemService itemService = new ItemService();

    public void printAll() {
        int pageNum = 0;
        int pageSize = 5;
        while (true) {
            int offset = pageNum * pageSize;
            PageableResponseVo<Item> responseVo = itemService.getPageData(++pageNum, pageSize);
            List<Item> items = responseVo.getData();
            items.forEach(this::print);

            if ((offset + items.size()) >= responseVo.getTotal()) {
                break;
            }
        }
    }

    private void print(Item item) {
        System.out.println(item.getItemNumber());
    }
}

class CustomerPrinter {
    private CustomService itemService = new CustomService();

    public void printAll() {
        int pageNum = 0;
        int pageSize = 5;
        while (true) {
            int offset = pageNum * pageSize;
            PageableResponseVo<Customer> responseVo = itemService.getPageData(++pageNum, pageSize);
            List<Customer> items = responseVo.getData();
            items.forEach(this::print);

            if ((offset + items.size()) >= responseVo.getTotal()) {
                break;
            }
        }
    }

    private void print(Customer item) {
        System.out.println(item.getCustomerNumber());
    }
}

class Main {
    public static void main(String[] args) {
        new ItemPrinter().printAll();
        new CustomerPrinter().printAll();
    }
}

/**
 * please focus on ItemPrinter.printAll() and CustomerPrinter.printAll()
 * sometimes we need to access all items from remote service, but it's annoying because it's paged and we have to calculate if it has next page.
 * There might have a lot of same similar codes, can we make it pretty?
 */