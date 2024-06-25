import React, { useEffect, useState } from 'react';



const Table = () => {
    let topeRonda;
    // let ronda;
    let topeMax;
    const [ronda, setRonda] = useState(1)
    const [txtRonda, setTxtRonda] = useState('')
    const [show, setShow] = useState(false)
    const [puedeElegir, setPuedeElegir] = useState(0)
    const [puedeElegirInd, setPuedeElegirInd] = useState(0)
    const [coord, setCoord] = useState(undefined)
    
    const hsAElegir = (a) => {
        let b = 60 - horas.total_AdmPublica;
        let c = 48 - horas.totalAnep
        if (a > b) { [a, b] = [b, a];  }
        if (b > c) { [b, c] = [c, b];  }
        if (a > b) { [a, b] = [b, a]; }
        return a;
     }
    const hsAElegirInd = (a) => {
        let b = 60 - horas.total_AdmPublica;
        let c = 50 - horas.totalAnep
        if (a > b) { [a, b] = [b, a];  }
        if (b > c) { [b, c] = [c, b];  }
        if (a > b) { [a, b] = [b, a]; }
        return a;
     }
    
    //  const coordInc = (pei) => { // 22
    //     //pei: horas que puede elegir por indivisibilidad (hs max)
    //     // true ? "coordinación incluída" : "más coordinación"
    //     console.log(pei)
    //         if(pei <= (60 - horas.total_AdmPublica)) {
    //             console.log('1')
    //             if(pei  <= (50 - horas.totalAnep)) {
    //                 console.log('2')
    //                 if (horas.noDoc + horas.otrosAnep_noDoc != 0) {
    //                     console.log('3')
    //                     return true
    //                 } else{
    //                     console.log('4')
    //                     return false
    //                 }
    //             } else {
    //                 console.log('5')
    //                 return true
    //             }
    //         } else {
    //             console.log('6')
    //             return true
    //         }
    // }


    const valoresIniciales = {
        //DGETP
        docDirEscalaf: 0,
        docDirOtros: 0,
        coordCentro: 0,
        coordPlan: 0,
        docIndBasicos: 0,
        docIndEscalaf: 0,
        docIndOtros: 0,
        noDoc: 0,
        totalDgetp: 0,

        //Otros ANEP
        otrosAnep_docDirEscalaf: 0,
        otrosAnep_docDirOtros: 0,
        otrosAnep_coordCentro: 0,
        otrosAnep_coordPlan: 0,
        otrosAnep_docIndBasicos: 0,
        otrosAnep_docIndEscalaf: 0,
        otrosAnep_docIndOtros: 0,
        otrosAnep_noDoc: 0,
        otrosAnep_total: 0,
       
        // Otros NO ANEP
        noAnep_docDirEscalaf: 0.0,
        noAnep_docDirOtros: 0.0,
        noAnep_coordCentro: 0.0,
        noAnep_coordPlan: 0.0,
        noAnep_docIndBasicos: 0.0,
        noAnep_docIndEscalaf: 0.0,
        noAnep_docIndOtros: 0.0,
        noAnep_noDoc: 0.0,
        noAnep_total: 0.0,
        
        //Total por Columna
        total_docDirEscalaf: 0.0,
        total_docDirOtros: 0.0,
        total_coordCentro: 0.0,
        total_coordPlan: 0.0,
        total_docIndBasicos: 0.0,
        total_docIndEscalaf: 0.0,
        total_docIndOtros: 0.0,
        total_noDoc: 0.0,
        total_AdmPublica: 0.0,

        basicosAnep: 0.0,
        otrosCargosAnep: 0.0,
        totalAnep: 0.0,
    }
    const [horas, setHoras] = useState(valoresIniciales)
    const [escalafon, setEscalafon] = useState(0)
    const clearAll = (e) => {
       setHoras(valoresIniciales)
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setHoras({...horas, [name]: Number(value)})
    }
    const handleEscalafon = (e) => {
        setEscalafon(e.target.value)
    }
    
    useEffect(()=>{
        setHoras({...horas, 
            totalDgetp: horas.docDirEscalaf + horas.docDirOtros + horas.coordCentro + horas.coordPlan + horas.docIndBasicos + horas.docIndEscalaf + horas.docIndOtros + horas.noDoc,
        })
     }, [horas.docDirEscalaf, horas.docDirOtros, horas.coordCentro, horas.coordPlan, horas.docIndBasicos, horas.docIndEscalaf, horas.docIndOtros, horas.noDoc])
    
     useEffect(()=>{
        setHoras({...horas, 
            otrosAnep_total: horas.otrosAnep_docDirEscalaf + horas.otrosAnep_docDirOtros + horas.otrosAnep_coordCentro + horas.otrosAnep_coordPlan + horas.otrosAnep_docIndBasicos + horas.otrosAnep_docIndEscalaf + horas.otrosAnep_docIndOtros + horas.otrosAnep_noDoc,
        })
     }, [horas.otrosAnep_docDirEscalaf, horas.otrosAnep_docDirOtros, horas.otrosAnep_coordCentro, horas.otrosAnep_coordPlan, horas.otrosAnep_docIndBasicos, horas.otrosAnep_docIndEscalaf, horas.otrosAnep_docIndOtros, horas.otrosAnep_noDoc,])
    
     useEffect(()=>{
    setHoras({...horas, 
        noAnep_total:  horas.noAnep_docDirEscalaf + horas.noAnep_docDirOtros + horas.noAnep_coordCentro + horas.noAnep_coordPlan + horas.noAnep_docIndBasicos + horas.noAnep_docIndEscalaf + horas.noAnep_docIndOtros + horas.noAnep_noDoc,
    })
    }, [horas.noAnep_docDirEscalaf, horas.noAnep_docDirOtros, horas.noAnep_coordCentro, horas.noAnep_coordPlan, horas.noAnep_docIndBasicos, horas.noAnep_docIndEscalaf, horas.noAnep_docIndOtros, horas.noAnep_noDoc,])
     useEffect(()=>{
        setHoras({...horas, 
            total_AdmPublica: horas.totalDgetp + horas.otrosAnep_total + horas.noAnep_total,
            total_docDirEscalaf: horas.docDirEscalaf + horas.otrosAnep_docDirEscalaf + horas.noAnep_docDirEscalaf,
            total_docDirOtros: horas.docDirOtros + horas.otrosAnep_docDirOtros + horas.noAnep_docDirOtros,
            total_coordCentro: horas.coordCentro + horas.otrosAnep_coordCentro + horas.noAnep_coordCentro,
            total_coordPlan: horas.coordPlan + horas.otrosAnep_coordPlan + horas.noAnep_coordPlan,
            total_docIndBasicos: horas.docIndBasicos + horas.otrosAnep_docIndBasicos + horas.noAnep_docIndBasicos,
            total_docIndEscalaf: horas.docIndEscalaf + horas.otrosAnep_docIndEscalaf + horas.noAnep_docIndEscalaf,
            total_docIndOtros: horas.docIndOtros + horas.otrosAnep_docIndOtros + horas.noAnep_docIndOtros,
            total_noDoc: horas.noDoc + horas.otrosAnep_noDoc +  horas.noAnep_noDoc,
            basicosAnep: horas.docIndBasicos + horas.otrosAnep_docIndBasicos,
            otrosCargosAnep: horas.docIndOtros + horas.otrosAnep_docIndOtros,
            totalAnep: horas.totalDgetp + horas.otrosAnep_total,
        })
     }, [horas.totalDgetp, horas.otrosAnep_total, horas.noAnep_total])

    const calcularRonda = () =>{
    //Con 60 hs en Adm. Publica
        if(horas.total_AdmPublica >=60){
            setRonda(0)
            topeRonda = 60;
            topeMax = 60;
            setPuedeElegir(0)
            setCoord(false)
        }
        
        
        //Sin horas en Adm. Pública
        else if(horas.total_AdmPublica === 0){
            setRonda(1)
            topeRonda = 20;
            topeMax = 22;
            setPuedeElegir(topeRonda)
            setPuedeElegirInd(topeMax)
            setCoord(false)
        }


        //Con += 48 horas en ANEP
        else if(horas.totalAnep >= 48){
            setRonda(4)
            topeRonda = 60;
            topeMax = 60;
            setPuedeElegir(topeRonda - horas.total_AdmPublica)
            setPuedeElegirInd(topeRonda - horas.total_AdmPublica)
            setCoord(true)
        } 
        

        //Con hs en ANEP
        else {
            //Sin cargos Básicos u otros -- Solo hs escalafonadas
            if((horas.basicosAnep + horas.otrosCargosAnep) == 0){

                // Doc. Dir. menor a 20
                if(horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.docIndEscalaf < 20){
                    setRonda(1)
                    topeRonda = 20;
                    topeMax = 22;
                    setPuedeElegir(hsAElegir(topeRonda - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.docIndEscalaf)))
                    setPuedeElegirInd(hsAElegirInd(topeMax - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.docIndEscalaf)))
                    //CASO 1


                //Doc. Dir. menor a 30
                } else if((horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.coordCentro + horas.docIndEscalaf) < 30){
                    setRonda(2)
                    topeRonda = 30;
                    topeMax = 32;
                    setPuedeElegir(hsAElegir(topeRonda - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.coordCentro + horas.docIndEscalaf)))
                    setPuedeElegirInd(hsAElegirInd(topeMax - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.coordCentro + horas.docIndEscalaf)))
                    setCoord(true)
                
                //Doc. Dir. menor a 48
                } else if((horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.coordCentro + horas.docIndEscalaf) < 48){
                    setRonda(3)
                    topeRonda = 48;
                    topeMax = 50;
                    setPuedeElegir(hsAElegir(topeRonda - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.coordCentro + horas.docIndEscalaf)))
                    setPuedeElegirInd(hsAElegirInd(topeMax - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.coordCentro + horas.docIndEscalaf)))
                    setCoord(true)
                }
            } 


            // Con horas basicos u otros
            else if((horas.basicosAnep + horas.otrosCargosAnep) > 0 && horas.basicosAnep != 40){
                // Efectivo
                if(escalafon == 1){
                    //Doc. Dir. menor a 20
                    if(horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.docIndEscalaf < 20){
                        setRonda(1)
                        topeRonda = 20;
                        topeMax = 22;
                        setPuedeElegir(hsAElegir(topeRonda - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.docIndEscalaf)))
                        setPuedeElegirInd(hsAElegirInd(topeMax - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.docIndEscalaf)))
                        //CASO 2
                    }
                    
                    //Doc. Dir. mayor a 30
                    else if((horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.coordCentro + horas.docIndEscalaf) >= 20){
                        setRonda(3)
                        topeRonda = 48;
                        topeMax = 50;
                        setPuedeElegir(hsAElegir(topeRonda - horas.totalDgetp))
                        setPuedeElegirInd(hsAElegirInd(topeMax - horas.totalDgetp))
                        setCoord(true)
                    }
                }
                
                // Interino
                else if(escalafon == 0){
                    if(horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.docIndEscalaf + horas.basicosAnep + horas.otrosCargosAnep < 36){
                        setRonda(1)
                        topeRonda = 20;
                        topeMax = 36;
                        const puedeElegirx = hsAElegir(topeMax - horas.basicosAnep - horas.otrosCargosAnep ) > topeRonda ? 
                            hsAElegir(topeRonda - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.docIndEscalaf)) : 
                            hsAElegir(topeMax - horas.basicosAnep - horas.otrosCargosAnep - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.docIndEscalaf)); 
                        setPuedeElegir(puedeElegirx)

                        const puedeElegiry = hsAElegirInd(topeMax - horas.basicosAnep - horas.otrosCargosAnep ) > topeRonda ? 
                            hsAElegirInd(topeMax - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.docIndEscalaf)) : 
                            hsAElegirInd(topeMax - horas.basicosAnep - horas.otrosCargosAnep - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.docIndEscalaf)); 
                            setPuedeElegirInd(puedeElegiry)

                        //CASO 3
                    }
                    
                    // Doc. Dir. mayor a 12
                    else if((horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.coordCentro + horas.docIndEscalaf + horas.basicosAnep + horas.otrosCargosAnep) >= 36){
                        setRonda(3);
                        topeRonda = 48;
                        topeMax = 50;
                        setPuedeElegir(hsAElegir(topeRonda - horas.totalDgetp))
                        setPuedeElegirInd(hsAElegirInd(topeMax - horas.totalDgetp))
                        setCoord(true)
                    }
                }
            } 

            // Con cargos de Direccion, Subdireccion, coordinacion y Basicos Agrarios
            else if(horas.basicosAnep == 40){
                setRonda(1)
                topeRonda = 48;
                topeMax = 50;
                setPuedeElegir(topeRonda - horas.basicosAnep - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.coordCentro + horas.docIndEscalaf))
                setPuedeElegirInd(topeMax - horas.basicosAnep - (horas.docDirEscalaf + horas.docDirOtros + horas.coordPlan + horas.coordCentro + horas.docIndEscalaf))
                setCoord(true)
            }
        }
    }

    const info = () => {
        calcularRonda()
        switch(ronda){
            case 0 :
                setTxtRonda('***No puede elegir***')
                break;
            case 1 :
                setTxtRonda('Elige en primera ronda')
                break;
            case 2 :
                setTxtRonda('Elige en segunda ronda')
                break;
            case 3 :
                setTxtRonda('Elige en tercera ronda')
                break;
            case 4 :
                setTxtRonda('Elige en cuarta ronda')
                break;
            default: setTxtRonda('Ver casos excepcionales')
        }
        setShow(true)
        // setTimeout(()=>{setShow(false)}, 5000)
    }


    const fecha = new Date()
    const dia = fecha.getDate()
    const mes = fecha.getMonth() + 1
    const anio = fecha.getFullYear()
    
  return (
    <div className=''>
        <h2>HORAS ASIGNADAS AL {dia + "/" + mes + "/" + anio} </h2>
            <table className="table col-7 py-2">
                <thead>
                <tr className="bg-blue-100">
                    <th className="" rowSpan="2">ORGANISMO</th>
                    <th className="" colSpan="2">DOCENCIA DIRECTA</th>
                    <th className="" colSpan="2">COORDINACIÓN</th>
                    <th className="" colSpan="3">DOCENCIA INDIRECTA</th>
                    <th className="" rowSpan="2">NO DOCENTE</th>
                    <th className="" rowSpan="2">TOTALES</th>
                </tr>
                <tr className="">
                    <th className="">ESCALAF.</th>
                    <th className="">OTROS*</th>
                    <th className="">CENTRO</th>
                    <th className="">PLAN <br /><span className='span'>(EPI, EGI, EDI, EDT)</span></th>
                    <th className="">BÁSICOS</th>
                    <th className="">ESCALAF.</th>
                    <th className="">OTROS</th>
                </tr>
                </thead>
                <tbody>
                <tr className="dgetp">
                    <td className="">DGETP</td>
                    <td className="">
                        <input type="number" name='docDirEscalaf'  className="text-center"  defaultValue={horas.docDirEscalaf} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='docDirOtros'  className="text-center" defaultValue={horas.docDirOtros} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='coordCentro'  className="text-center" defaultValue={horas.coordCentro} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='coordPlan'  className="text-center" defaultValue={horas.coordPlan} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='docIndBasicos'  className="text-center" defaultValue={horas.docIndBasicos} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='docIndEscalaf'  className="text-center" defaultValue={horas.docIndEscalaf} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='docIndOtros'  className="text-center" defaultValue={horas.docIndOtros} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='noDoc'  className="text-center" defaultValue={horas.noDoc} onBlur={handleInput}></input>
                    </td>
                    <td className="text">{horas.totalDgetp}</td>
                </tr>
                <tr>
                    <td className="">OTROS ANEP</td>
                    <td className="">
                        <input type="number" name='otrosAnep_docDirEscalaf'  className="text-center" defaultValue={horas.otrosAnep_docDirEscalaf} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='otrosAnep_docDirOtros'  className="text-center" defaultValue={horas.otrosAnep_docDirOtros} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='otrosAnep_coordCentro'  className="text-center" defaultValue={horas.otrosAnep_coordCentro} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='otrosAnep_coordPlan'  className="text-center" defaultValue={horas.otrosAnep_coordPlan} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='otrosAnep_docIndBasicos'  className="text-center" defaultValue={horas.otrosAnep_docIndBasicos} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='otrosAnep_docIndEscalaf'  className="text-center" defaultValue={horas.otrosAnep_docIndEscalaf} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='otrosAnep_docIndOtros'  className="text-center" defaultValue={horas.otrosAnep_docIndOtros} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='otrosAnep_noDoc'  className="text-center" defaultValue={horas.otrosAnep_noDoc} onBlur={handleInput}></input>
                    </td>
                    <td className="text">{horas.otrosAnep_total}</td>
                </tr>
                <tr>
                    <td className="">OTROS ORGANISMOS</td>
                    <td className="">
                        <input type="number" name='noAnep_docDirEscalaf'  className="text-center" defaultValue={horas.noAnep_docDirEscalaf} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='noAnep_docDirOtros'  className="text-center" defaultValue={horas.noAnep_docDirOtros} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='noAnep_coordCentro'  className="text-center" defaultValue={horas.noAnep_coordCentro} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='noAnep_coordPlan'  className="text-center" defaultValue={horas.noAnep_coordPlan} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='noAnep_docIndBasicos'  className="text-center" defaultValue={horas.noAnep_docIndBasicos} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='noAnep_docIndEscalaf'  className="text-center" defaultValue={horas.noAnep_docIndEscalaf} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='noAnep_docIndOtros'  className="text-center" defaultValue={horas.noAnep_docIndOtros} onBlur={handleInput}></input>
                    </td>
                    <td className="">
                        <input type="number" name='noAnep_noDoc'  className="text-center" defaultValue={horas.noAnep_noDoc} onBlur={handleInput}></input>
                    </td>
                    <td className="text">{horas.noAnep_total}</td>
                </tr>
                <tr>
                    <td className="">TOTAL ADM. PÚBLICA</td>
                    <td className="text">{horas.total_docDirEscalaf}</td>
                    <td className="text">{horas.total_docDirOtros}</td>
                    <td className="text">{horas.total_coordCentro}</td>
                    <td className="text">{horas.total_coordPlan}</td>
                    <td className="text">{horas.total_docIndBasicos}</td>
                    <td className="text">{horas.total_docIndEscalaf}</td>
                    <td className="text">{horas.total_docIndOtros}</td>
                    <td className="text">{horas.total_noDoc}</td>
                    <td className="text">{horas.total_AdmPublica}</td>
                </tr>
                </tbody>
            </table>
            {show ? 
            <>
                {/* <p className='alerta'>{txtRonda}, puede elegir {puedeElegir}/{puedeElegirInd} horas {coord ? "coordinación incluída" : "más coordinación"}.</p> */}
                <p className='alerta'>{txtRonda}. Puede elegir {puedeElegir === puedeElegirInd ? puedeElegir : puedeElegir+" o "+puedeElegirInd} horas{coord == undefined ? "" : (coord ? " coordinación incluída" : " más coordinación")}.</p>
                <button className='buttonCalc button' onClick={() =>{setShow(false)}}>OK</button>
            </>
                :
                <div className='other row'>
                    <div className='defArea col-7'>
                        <label>En esta area soy: </label>
                        <select name="escalafon" id="ecalafon" className='select' onChange={handleEscalafon}>
                            <option value="0" className='option'>Interino, Suplente o Aspirante</option>
                            <option value="1" className='option'>Efectivo o con Derechos Emergentes</option>
                        </select>
                        {/* {horas.noAnep_total > 0 &&
                        <div>
                        <label>Indique organismo:</label>
                        <select name="escalafon" id="ecalafon" className='select' onChange={handleEscalafon}>
                            <option value="a" className='option'>Organismo 1</option>
                            <option value="b" className='option'>Organismo 2</option>
                            <option value="c" className='option'>Organismo 3</option>
                            <option value="d" className='option'>Organismo 4</option>
                            <option value="e" className='option'>Organismo 5</option>
                        </select>
                        </div>} */}
                    </div>
                    <div className='buttons col-5'>
                        {/* <button className='buttonCalc button' onClick={calcularRonda}>Calcular ronda</button> */}
                        <button className='buttonCalc button' onClick={info}>Calcular ronda</button>
                        <button className='buttonClear button' onClick={clearAll}>Limpiar</button>
                    </div>
                </div>
            }
     </div>
  );
};

export default Table;
