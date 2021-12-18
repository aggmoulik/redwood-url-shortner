// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import URLSLayout from 'src/layouts/URLSLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/slug/{slug:String}" page={HomePage} name="home" />
      <Set wrap={URLSLayout}>
        <Route path="/urls/new" page={URLNewURLPage} name="newURL" />
        <Route path="/urls/{id:Int}/edit" page={URLEditURLPage} name="editURL" />
        <Route path="/urls/{id:Int}" page={URLURLPage} name="url" />
        <Route path="/urls" page={URLURLSPage} name="urls" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
