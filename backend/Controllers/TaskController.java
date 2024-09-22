import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TaskController {

    @CrossOrigin(origins = "http://192.168.8.182:3000")
    @GetMapping("/tasks")
    public List<Task> getTasks() {
        // Your logic here
    }
}