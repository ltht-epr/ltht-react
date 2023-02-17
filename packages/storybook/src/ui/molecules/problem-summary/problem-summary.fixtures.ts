import { Problem } from '@ltht-react/problem'

export const ErrorMessageOne: Problem = {
  text: `An error occurred whilst fetching Medications. If this issue persists please contact the helpdesk.`,
  type: 'error',
}

export const ErrorMessageTwo: Problem = {
  text: `An error occurred whilst fetching Diagnoses. If this issue persists please contact the helpdesk.`,
  type: 'error',
}

export const ErrorMessageThree: Problem = {
  text: `An error occurred whilst fetching Allergies. If this issue persists please contact the helpdesk.`,
  type: 'error',
}

export const WarningMessageOne: Problem = {
  text: `Taking this action will remove the patient from their current Pedigree Group.`,
  type: 'warning',
}

export const WarningMessageTwo: Problem = {
  text: `You do not have access to this feature.`,
  type: 'warning',
}

export const WarningMessageThree: Problem = {
  text: `There is insufficient data in this patient record to show this widget.`,
  type: 'warning',
}

export const ThreeErrors: Problem[] = [ErrorMessageOne, ErrorMessageTwo, ErrorMessageThree]

export const SixWarningsAndErrors = [
  ErrorMessageOne,
  ErrorMessageTwo,
  ErrorMessageThree,
  WarningMessageOne,
  WarningMessageTwo,
  WarningMessageThree,
]

export const StackTraceError: Problem = {
  text: `javax.servlet.ServletException: Something bad happened
  at com.example.myproject.OpenSessionInViewFilter.doFilter(OpenSessionInViewFilter.java:60)
  at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)
  at com.example.myproject.ExceptionHandlerFilter.doFilter(ExceptionHandlerFilter.java:28)
  at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)
  at com.example.myproject.OutputBufferFilter.doFilter(OutputBufferFilter.java:33)
  at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)
  at org.mortbay.jetty.servlet.ServletHandler.handle(ServletHandler.java:388)
  at org.mortbay.jetty.security.SecurityHandler.handle(SecurityHandler.java:216)
  at org.mortbay.jetty.servlet.SessionHandler.handle(SessionHandler.java:182)
  at org.mortbay.jetty.handler.ContextHandler.handle(ContextHandler.java:765)
  at org.mortbay.jetty.webapp.WebAppContext.handle(WebAppContext.java:418)
  at org.mortbay.jetty.handler.HandlerWrapper.handle(HandlerWrapper.java:152)
  at org.mortbay.jetty.Server.handle(Server.java:326)
  at org.mortbay.jetty.HttpConnection.handleRequest(HttpConnection.java:542)
  at org.mortbay.jetty.HttpConnection$RequestHandler.content(HttpConnection.java:943)
  at org.mortbay.jetty.HttpParser.parseNext(HttpParser.java:756)
  at org.mortbay.jetty.HttpParser.parseAvailable(HttpParser.java:218)
  at org.mortbay.jetty.HttpConnection.handle(HttpConnection.java:404)
  at org.mortbay.jetty.bio.SocketConnector$Connection.run(SocketConnector.java:228)
  at org.mortbay.thread.QueuedThreadPool$PoolThread.run(QueuedThreadPool.java:582)`,
  type: 'error',
}
