import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tsMethodSignature } from '@babel/types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function CreditPayment (props) {
  var dat=props.curdata
  dat=dat.split('.')
  if (props.method==="Аннуитентные платежи"){
  const perc=props.percent/1200
  const b=Math.pow(1+perc, props.period*12)
  if (isNaN(props.percent) || isNaN (props.ammount) || isNaN(props.period) || isNaN(props.curdata)) {
    return <p></p>}
  else {
    return <p>{props.ammount*(perc+perc/(b-1))}</p>}}
  else if (props.method==="Дифференцированные платежи") {
    if (isNaN(props.percent) || isNaN (props.ammount) || isNaN(props.period) || isNaN(props.curdata)) {
      return <p></p>}
    else{
    const perc=props.percent/1200
    var table= {datae : [], pay: []}
    const fixedpay=props.ammount/(props.period*12)
    var rows=[]
    for (let i = 1; i <= props.period*12; i++){
      if (i===1) {
      table.datae[i]=props.curdata
      }
      else {
        if (Number(dat[1])+1<13){
          if (Number(dat[1])<9){
          dat[1]='0'+String(Number(dat[1])+1)}
          else {dat[1]=String(Number(dat[1])+1)}
          table.datae[i]=dat[0]+'.'+ dat[1]+'.'+dat[2]}
        else {dat[1]='01'
           dat[2]=String(Number(dat[2])+1)
          table.datae[i]=dat[0]+'.01.'+dat[2]}}
      table.pay[i]=Math.ceil(fixedpay+(props.ammount-(fixedpay*(i-1)))*perc)
      rows.push ([table.datae[i],table.pay[i]])}
          }
    return <div>
     <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell align="right">Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row[1]}>
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell align="center">{row[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  }
  else {return <p></p>}
}

class Credit extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this)
    this.state= {ammount: "", period: "", percent: "", method: "", result: "", curdata: ""};
  }

  handleChange(e) {
    const ob=e.target.id
    if (ob==="ammount"){
    this.setState ({ammount: e.target.value})}
    else if (ob==="period"){
      this.setState ({period: e.target.value})}
    else if (ob==='percent'){
      this.setState ({percent: e.target.value})}
    else if (ob==="curdata"){
      this.setState ({curdata: e.target.value})}
    else if (ob==="method"){
      this.setState ({method: e.target.value})}
  }

  render(){
    const ammount = this.state.ammount
    const percent=this.state.percent
    const period=this.state.period
    const method = this.state.method
    const curdata=this.state.curdata
    return (
        <>
        <form>
        <p>Введите сумму кредита:</p>
        <input value={ammount} id="ammount"
               onChange={this.handleChange} />
        <p>Введите процентную ставку:</p>
        <input value={percent} id="percent"
               onChange={this.handleChange} />
        <p>Введите период кредитования в годах:</p>
        <input value={period} id="period"
               onChange={this.handleChange} />
        
        <p>Введите дату начала кредитования:</p>
        <input value={curdata} id="curdata"
               onChange={this.handleChange} />

        <p>Выберите вид погашения:</p>
        <select value={method} id="method" onChange={this.handleChange}>
          <option></option>
          <option>Аннуитентные платежи</option>
          <option>Дифференцированные платежи</option>
        </select>
      </form>
      <CreditPayment ammount = {parseFloat(ammount)} percent={parseFloat(percent)}
      period={parseFloat(period)} method={method} curdata={curdata}/> 
      </>
    );
  }
}

function DepositPayment (props) {
  var dat=props.curdata
  dat=dat.split('.')
  if (props.method==="Простые проценты"){
  const perc=props.percent/1200
  if (isNaN(props.percent) || isNaN (props.ammount) || isNaN(props.period) || isNaN(props.curdata)) {
    return <p></p>}
  else {
    return <div>
    <p>Ежемесячное начисление:</p>
    <p>{Math.floor(props.ammount*(perc))}</p>
    <p>Общая сумма на конец периода:</p>
    <p>{Math.floor(props.ammount+props.ammount*props.period*12*(perc))}</p>
    </div>
}}
  else if (props.method==="Сложные проценты") {
    if (isNaN(props.percent) || isNaN (props.ammount) || isNaN(props.period) || isNaN(props.curdata)) {
      return <p></p>}
    else{
    const perc=props.percent*12/36500
    var table= {datae : [], pay: []}
    var rows=[]
    for (let i = 1; i <= props.period*12; i++){
      if (i===1) {
      table.datae[i]=props.curdata
      }
      else {
        if (Number(dat[1])+1<13){
          if (Number(dat[1])<9){
          dat[1]='0'+String(Number(dat[1])+1)}
          else {dat[1]=String(Number(dat[1])+1)}
          table.datae[i]=dat[0]+'.'+ dat[1]+'.'+dat[2]}
        else {dat[1]='01'
           dat[2]=String(Number(dat[2])+1)
          table.datae[i]=dat[0]+'.01.'+dat[2]}}
      table.pay[i]=Math.floor(props.ammount*Math.pow((1+perc),i))
      rows.push ([table.datae[i],table.pay[i]])}

    return <div>
     <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell align="right">Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row[1]}>
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell align="center">{row[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  }}
  else {return <p></p>}
}

class Deposit extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this)
    this.state= {ammount: "", period: "", percent: "", method: "", result: "", curdata: ""};
  }

  handleChange(e) {
    const ob=e.target.id
    if (ob==="ammount"){
    this.setState ({ammount: e.target.value})}
    else if (ob==="period"){
      this.setState ({period: e.target.value})}
    else if (ob==='percent'){
      this.setState ({percent: e.target.value})}
    else if (ob==="curdata"){
      this.setState ({curdata: e.target.value})}
    else if (ob==="method"){
      this.setState ({method: e.target.value})}
  }

  render(){
    const ammount = this.state.ammount
    const percent=this.state.percent
    const period=this.state.period
    const method = this.state.method
    const curdata=this.state.curdata
    return (
        <>
        <form>
        <p>Введите первоначальную сумму депозита:</p>
        <input value={ammount} id="ammount"
               onChange={this.handleChange} />
        <p>Введите процентную ставку:</p>
        <input value={percent} id="percent"
               onChange={this.handleChange} />
        <p>Введите период хранения в годах:</p>
        <input value={period} id="period"
               onChange={this.handleChange} />
        
        <p>Введите дату начала депозита:</p>
        <input value={curdata} id="curdata"
               onChange={this.handleChange} />

        <p>Выберите вид нарещния:</p>
        <select value={method} id="method" onChange={this.handleChange}>
          <option></option>
          <option>Простые проценты</option>
          <option>Сложные проценты</option>
        </select>
      </form>
      <DepositPayment ammount = {parseFloat(ammount)} percent={parseFloat(percent)}
      period={parseFloat(period)} method={method} curdata={curdata}/> 
      </>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Выберите услугу</h2>
    </div>
  );
}

class Calculator extends React.Component {
  render() {
    return(
     
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Домашняя страница</Link>
        </li>
        <li>
          <Link to="/credits">Кредиты</Link>
        </li>
        <li>
          <Link to="/deposits">Депозиты</Link>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/credits">
          <Credit />
        </Route>
        <Route path="/deposits">
          <Deposit />
        </Route>
      </Switch>
    </div>
  </Router>
    )}
}

export default Calculator;
