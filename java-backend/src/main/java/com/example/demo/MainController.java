import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class MainController {

@Value("${python.service.url}")
private String pythonServiceUrl;

private final RestTemplate restTemplate = new RestTemplate();

@GetMapping("/api/hello")
public String hello() {
    return "Hello from Java backend";
}

@GetMapping("/api/python")
public String callPython() {
    return restTemplate.getForObject(
        pythonServiceUrl + "/process",
        String.class
    );
}

}
