package controllers;

import actors.MessageActor;
import data.LoginForm;
import play.Configuration;
import play.data.Form;
import play.data.FormFactory;
import play.mvc.*;

import views.html.*;

import javax.inject.Inject;
import java.util.Objects;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    @Inject
    Configuration configuration;

    @Inject
    FormFactory formFactory;

    public Result chat() {
        return ok(views.html.index.render());
    }

    public Result login() {
        return ok(views.html.login.render(""));
    }


    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result authenticate(){
        Form<LoginForm> loginFormForm = formFactory.form(LoginForm.class).bindFromRequest();
        if(Objects.equals(configuration.getString("app.user.username"), loginFormForm.get().getUsername()) &&
                Objects.equals(configuration.getString("app.user.password"), loginFormForm.get().getPassword())){
            return ok();
        }
        return Results.unauthorized();
    }


    public Result index() {
        return ok(views.html.index.render());
    }
    
    public LegacyWebSocket<String> chatSocket(){
    return  WebSocket.withActor(MessageActor::props);

}


}