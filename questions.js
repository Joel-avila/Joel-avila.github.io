const questions = [
    //JOEL
    
    //Serie 1
    //Questio 1
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `Es duu a terme un assaig Charpy amb un pèndol que a l’extrem té una massa de \\(20{,}4 \\, \\text{kg}\\).
               Es deixa caure el pèndol des d’una altura inicial de \\(0{,}9 \\, \\text{m}\\) i, després de xocar contra una
               proveta, arriba a una altura final de \\(350 \\, \\text{mm}\\). La secció de la proveta a la zona de l’entalla és
               de \\(80 \\, \\text{mm}^2\\). Quina és la resiliència del material?`,
        options: [
            { text: "\\(1{,}375 \\, \\text{J/mm}^2\\)", value: "a" },
            { text: "\\(140{,}3 \\, \\text{kJ/mm}^2\\)", value: "b" },
            { text: "\\(1{,}375 \\, \\text{MJ/mm}^2\\)", value: "c" },
            { text: "\\(140{,}3 \\, \\text{kJ/m}^2\\)", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            E = m \\cdot g \\cdot (h_1 - h_2) = 20{,}4 \\cdot 9{,}81 \\cdot (0{,}9 - 0{,}35) = 110 \\text{J}
            \\]
            \\[
            R = \\frac{E}{S} = \\frac{110}{80} = 1{,}375 \\text{J/mm^2}
            \\]
            <br>`
    },

    //Questio 2
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `En un ajust 68 H7/j6, la tolerància H7 del forat és \\(\\genfrac{}{}{0pt}{}{+30}{0} \\, \\mu\\text{m}\\) i la tolerància j6 de l’eix
               és \\(\\genfrac{}{}{0pt}{}{+12}{-7} \\, \\mu\\text{m}\\). Tenint en compte aquestes dades, es pot afirmar que`,
        options: [
            { text: "el joc màxim és 31 μm.", value: "a" },
            { text: "el serratge màxim és 37 μm.", value: "b" },
            { text: "és un ajust indeterminat.", value: "c" },
            { text: "el joc màxim és 12 μm.", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            És un ajustament que pot donar joc o premeu segons el cas.
            <br>`
    },

    //Questio 3
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `Un automòbil emet \\(118 \\, \\text{g de CO}_2\\) per cada kilòmetre recorregut. Si consumeix \\(50 \\, L\\) de
               gasoil, quants kilograms de CO2 (petjada de carboni) deixarà a l’atmosfera sabent que el seu
               consum mitjà és de \\(5{,}4 \\, \\frac{L}{100 \\, km}\\)?`,
        options: [
            { text: "590,0 kg", value: "a" },
            { text: "270,0 kg", value: "b" },
            { text: "109,3 kg", value: "c" },
            { text: "10,93 kg", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            d_r = \\frac{consum gasoil}{consum mitjà} = \\frac{50}{5{,}4/100} = 926 \\, km
            \\]
            \\[
            CO_2 = d_r \\cdot emisions = 109300 \\, \\text{g} = 109{,}3 \\, \\text{kg}
            \\]
            <br>`
    },

    //Questio 4
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatica",
        text: `Un motor de 4 cilindres i amb una cilindrada total de \\(1461 \\, \\text{cm}^3\\)
                té una relació de compressió de \\(r = 18{,}8\\). Quin és el volum de la cambra de combustió?`,
        options: [
            { text: "\\(365{,}3 \\, \\text{cm}^3\\)", value: "a" },
            { text: "\\(19{,}43 \\, \\text{cm}^3\\)", value: "b" },
            { text: "\\(77{,}71 \\, \\text{cm}^3\\)", value: "c" },
            { text: "\\(20{,}52 \\, \\text{cm}^3\\)", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            V_d = \\frac{cilindrada}{cilindres} = \\frac{1461}{4} = 365{,}25 \\,\\text{cm}^3
            \\]
            \\[
            V_c = \\frac{V_d}{r - 1} = \\frac{365{,}25}{17{,}8} = 20{,}52 \\, \\text{cm}^3
            \\]
            <br>`
    },

    //Questio 5
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatica",
        text: `Un cilindre de doble efecte té un diàmetre interior de \\(40 \\text{mm}\\), un diàmetre de tija de
               \\(25 \\text{mm}\\) i una cursa de \\(300 \\text{mm}\\). Si la pressió de treball és de \\(0{,}6 \\text{MPa}\\), quina és la força que fa
               el cilindre en el procés de retrocés?`,
        options: [
            { text: "294,5 N", value: "a" },
            { text: "459,5 N", value: "b" },
            { text: "754,0 N", value: "c" },
            { text: "1,051 kN", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            A = \\frac{\\pi \\cdot A_\\text{útil}^2}{4} = \\frac{\\pi \\cdot (0{,}04^2-0{,}025^2)}{4} = 0,000765 \\text{m}^2
            \\]
            \\[
            F = Pressió \\cdot A = 0,6 \\cdot 10^6 \\cdot 0,000765 = 459{,}5 \\text{N}
            \\]
            <br>`
    },

    //Exercici 2
    {
        type: "exercicis",
        category: "control",
        text: `El sistema automàtic d’obertura d’un vehicle en desbloqueja les portes quan el comandament és fora del vehicle i a menys d’un metre de distància. Per això, el sistema
                automàtic incorpora un detector de proximitat i un detector de presència del comandament a l’interior. La porta del vehicle també es pot obrir manualment amb una clau
                per a emergències (si el comandament es queda sense bateria o hom se’l descuida a l’interior, entre altres causes). Utilitzant les variables d’estat següents:
               <br><br><img width="600" height="200" src="https://Joel-avila.github.io/fotos/2019Exercici2Serie1_J.PNG" alt="Imatge relacionada amb la pregunta"><br>
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [0,5 punts]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            
            <strong>a) Taula de verita</strong>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>x</th>
                        <th>s</th>
                        <th>c</th>
                        <th>p</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>1</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
                </tbody>
            </table>
            <br>
            
            <strong>b) La funció lògica</strong>
            \\[
            p \\, = \\, ( d + m + i ) \\cdot (d + \\bar{m} + i ) \\cdot ( \\bar{d} + m + i ) = d \\cdot m + i
            \\]
            <br>

            <strong>c) Esquema de portes lògiques</strong>
            <br><br>
            <img src="https://Joel-avila.github.io/fotos/2019Exercici2.2Serie1_J.PNG" alt="Imatge relacionada amb la resposta">
            <br>`,
    },

    //Exercici 3A
    {
        type: "exercicis",
        category: "energia",
        text: `S’han instal·lat \\(n = 50\\) aerogeneradors de 3 pales en un parc eòlic. 
               El diàmetre de l’àrea d’escombratge de les pales és \\(d = 77 \\, \\text{m}\\) i el rendiment dels aerogeneradors \\(\\eta_{\\text{aerog}} = 0{,}68\\). 
               S’estima que la velocitat mitjana del vent al parc és \\(v = 25 \\, \\text{km/h}\\); el parc està en funcionament 300 dies a l’any i obté energia 18 hores diàries. 
               La potència mitjana del vent \\(P_{\\text{vent}}\\) es pot estimar, per a un aerogenerador, com l’energia cinètica del vent per unitat de temps mitjançant l’expressió:
               \\[
               P_{\\text{vent}} = \\frac{1}{2} \\rho A v^3
               \\]
               en què \\(A\\) és l’àrea que escombren les pales de l’aerogenerador, \\(\\rho\\) és la densitat de l’aire i \\(v\\) és la velocitat del vent. 
               D’aquesta potència, el coeficient d’aprofitament del vent és \\(c_a = 0{,}42\\).
               
               Sabent que \\(1{,}225 \\, \\text{g}\\) d’aire ocupen un volum d’\\(1 \\, \\text{m}^3\\), determineu:
               <br><strong>a)</strong> La potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador. [0,5 punts]
               <br><strong>b)</strong> La potència elèctrica útil \\(P_{\\text{útil}}\\) que generarà cada aerogenerador. [0,5 punts]
               <br><strong>c)</strong> L’energia elèctrica total \\(E_{\\text{total}}\\) que es generarà al parc durant un any. [0,5 punts]
               <br><strong>d)</strong> Els ingressos que tindrà el parc eòlic si el preu de venda de l’energia eòlica és \\(p_{\\text{venda}} = 7{,}624\\) cèntims d’euro per \\(\\text{kWh}\\). [0,5 punts]
               <br><strong>e)</strong> En quin percentatge disminuirien els ingressos anteriors si la velocitat mitjana del vent es reduís un 10 %.
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Càlcul de la potència mitjana del vent \\(P_{\\text{vent}}\\) per a un aerogenerador:</strong>
            <br>
            - Àrea escombrada per les pales:
            \\[ 
            A = \\pi \\cdot r^2 
            \\] 
            \\[ 
            A = \\pi \\cdot (38{,}5)^2 = 4657 \\, \\text{m}^2 
            \\]
            - Potència del vent:
            \\[ 
            P_{\\text{vent}} = \\frac{1}{2} \\cdot A \\cdot \\rho \\cdot v^3 
            \\]
            \\[ 
            P_{\\text{vent}} = \\frac{1}{2} \\cdot 4657 \\cdot 1{,}225 \\cdot 20^3 
            \\]
            \\[ 
            P_{\\text{vent}} = 9{,}552 \\cdot 10^5 \\, \\text{W} = 955{,}2 \\, \\text{kW}
            \\]
            <br>
            <strong>b) Potència elèctrica útil \\(P_{\\text{útil}}\\) generada per cada aerogenerador:</strong>
            <br>
            - Coeficient aerodinàmic:
            \\[ 
            c_a = 0{,}42 
            \\]
            - Rendiment:
            \\[ 
            \\eta = 0{,}68 
            \\] 
            \\[ 
            P_{\\text{útil}} = P_{\\text{vent}} \\cdot c_a \\cdot \\eta 
            \\] 
            \\[ 
            P_{\\text{útil}} = 955{,}2 \\cdot 0{,}42 \\cdot 0{,}68 
            \\] 
            \\[ 
            P_{\\text{útil}} = 272{,}8 \\, \\text{kW} 
            \\]
            <br>
            <strong>c) Energia elèctrica total \\(E_{\\text{total}}\\) generada al parc durant un any:</strong>
            <br>
            - Temps anual:
            \\[ 
            t = 300 \\cdot 18 = 5400 \\, \\text{h} 
            \\]
            - Energia per aerogenerador:
            \\[ 
            E_1 = P_{\\text{útil}} \\cdot t 
            \\] 
            \\[ 
            E_1 = 272{,}8 \\, \\text{kW} \\cdot 5400 \\, \\text{h} 
            \\] 
            \\[ 
            E_1 = 1{,}473 \\cdot 10^6 \\, \\text{kWh} 
            \\]
            - Energia total:
            \\[ 
            E_{\\text{total}} = 50 \\cdot E_1 = 50 \\cdot 1{,}473 \\cdot 10^6 
            \\] 
            \\[ 
            E_{\\text{total}} = 7{,}366 \\cdot 10^7 \\, \\text{kWh} = 265{,}2 \\cdot 10^{12} \\, \\text{J}
            \\]
            <br>
            <strong>d) Ingressos del parc eòlic:</strong>
            <br>
            - Preu venda:
            \\[ 
            p = 7{,}624 \\, \\text{cèntims/kWh} = 0{,}07624 \\, \\text{€/kWh} 
            \\] 
            \\[ 
            I = E_{\\text{total}} \\cdot p 
            \\] 
            \\[ 
            I = 7{,}366 \\cdot 10^7 \\cdot 0{,}07624 
            \\] 
            \\[ 
            I = 5{,}616 \\cdot 10^6 \\, \\text{€} 
            \\]
            <br>
            <strong>e) Impacte d'una reducció del 10 % en la velocitat del vent:</strong>
            <br>
            \\[ 
            \\frac{P'}{P} = (0{,}9)^3 = 0{,}729 
            \\] 
            \\[ 
            \\Delta = (1 - 0{,}729) \\cdot 100 
            \\] 
            \\[ 
            \\Delta = 27{,}1\\% 
            \\]
            <br>`, 
    },

    //Exercici 4A
    {
        type: "exercicis",
        category: "energia",
        text: `Un patinet elèctric utilitza una bateria ideal de tensió \\(U = 24 \\, \\text{V}\\) i energia \\(E_\\text{bat} = 250 \\, \\text{W h}\\) 
               per a alimentar un motor de rendiment \\(\\eta_\\text{motor} = 0{,}89\\). La roda motriu del patinet, de diàmetre 
               \\(d_\\text{roda} = 160 \\, \\text{mm}\\), està connectada directament a l’eix de sortida del motor. A l’inici del trajecte 
               la bateria està totalment carregada. En les condicions d’estudi, el patinet avança sempre a 
               velocitat constant per un terreny pla, les rodes giren a \\(n_\\text{roda} = 664 \\, \\text{min}^{–1}\\) i el motor subministra 
               a l’eix de la roda una potència \\(P_\\text{subm} = 200 \\, \\text{W}\\). Determineu:
               <br><strong>a)</strong> El parell \\(\\Gamma\\) que subministra el motor. [0,5 punts]
               <br><strong>b)</strong> La velocitat d’avanç \\(v_\\text{pat}\\) del patinet. [0,5 punts]
               <br><strong>c)</strong> L’energia mecànica útil disponible a l’eix de la roda \\(E_\\text{útil}\\). [0,5 punts]
               <br><strong>d)</strong> El temps màxim \\(t_\\text{màx}\\) de funcionament del patinet i la distància màxima recorreguda \\(s_\\text{màx}\\). [1 punt]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) El parell</strong>
            <br>
            - Primer convertim rpm a rad/s:
            \\[
            \\omega = 664 \\, \\frac{\\text{rev}}{\\text{min}} \\cdot \\frac{2\\pi \\, \\text{rad}}{1 \\, \\text{rev}} \\cdot \\frac{1 \\, \\text{min}}{60 \\, \\text{s}} = 69{,}53 \\, \\text{rad/s}
            \\]
            - Parell
            \\[ 
            \\Gamma_{\\text{motor}} = \\frac{P_{\\text{subm}}}{\\omega} 
            \\]
            \\[ 
            \\Gamma_{\\text{motor}} = \\frac{200}{69{,}53} = 2{,}876 \\, \\text{N·m} 
            \\]
            <br>

            <strong>b) La velocitat d’avanç</strong>
            <br>
            \\[ 
            v_{\\text{pat}} = \\omega \\cdot r 
            \\]
            \\[
            v_{\\text{pat}} = 69{,}53 \\, \\text{rad/s} \\cdot 0{,}08 \\, \\text{m} = 5{,}563 \\, \\text{m/s} 
            \\]
            - Passem a km/h:
            \\[ 
            v_{\\text{pat}} = 5{,}563 \\, \\text{m/s} \\cdot 3{,}6 = 20{,}03 \\, \\text{km/h} 
            \\]
            <br>

            <strong>c) Energia mecànica útil disponible</strong>
            <br>
            - Energía útil del motor:
            \\[ E_{\\text{motor}} = \\eta_{\\text{motor}} \\cdot E_{\\text{bat}} \\]
            \\[ E_{\\text{motor}} = 0{,}89 \\cdot 250 = 222{,}5 \\, \\text{Wh} \\]
            \\[ E_{\\text{útil}} = E_{\\text{bat}} + E_{\\text{motor}} \\]
            \\[ E_{\\text{útil}} = 250 + 222{,}5 = 472{,}5 \\, \\text{Wh} \\]
            \\[ E_{\\text{útil}} = 472{,}5 \\, \\text{Wh} \\cdot 3600 \\, \\text{J/Wh} = 8{,}01 \\cdot 10^5 \\, \\text{J} \\]
            <br>
            <strong>d) Temps màxim i distància màxima</strong>
            <br>
            - Temps màxim
            \\[ t_{\\text{max}} = \\frac{E_{\\text{útil}}}{P_{\\text{subm}}} \\]
            \\[ t_{\\text{max}} = \\frac{8{,}01 \\cdot 10^5}{200} = 4005 \\, \\text{s} \\]
            \\[ t_{\text{max}} = \\frac{4005}{3600} = 1{,}113 \\, \\text{h} \\]
            - Distància màxima
            \\[ s_{\\text{max}} = v_{\\text{pat}} \\cdot t_{\\text{max}} \\]
            \\[ s_{\\text{max}} = 20{,}03 \\, \\text{km/h} \\cdot 1{,}113 \\, \\text{h} = 22{,}28 \\, \\text{km} \\]
            <br>`,
    },

    //Exercici 3B
    {
        type: "exercicis",
        category: "maquines",
        text: `Un cartell rectangular i homogeni de massa 
               \\(m = 12 \\, \\text{kg}\\) està subjecte a la barra BO mitjançant dos petits cables d’acer en els punts C i D. 
               El tirant AB manté el sistema en equilibri. La barra està articulada amb la paret en el punt O, 
               i les masses de tots els elements són negligibles, excepte la del cartell rectangular
               <img src="https://Joel-avila.github.io/fotos/2019Exercici3Serie1_J.PNG" alt="Imatge relacionada amb la resposta">
               <br><strong>a)</strong> Determineu les forces \\(T_C\\) i \\(T_D\\) a les quals estan sotmesos els cables d’acer. [0,5 punts]
               <br><strong>b)</strong> Dibuixeu el diagrama de cos lliure de la barra BO. [0,5 punts]
               <br>Determineu:
               <br><strong>c)</strong> L’angle φ. [0,5 punts]
               <br><strong>d)</strong> La força \\(T_\\text{AB}\\) a la qual està sotmès el tirant AB. [0,5 punts]
               <br><strong>e)</strong> Les forces horitzontal \\(F_H\\) i vertical \\(F_V\\) a l’articulació O. [0,5 punts]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Forces \\(T_C\\) i \\(T_D\\)</strong>
            <br>
            \\[
            \\Sigma F_\\text{verticals} = 0 \\to T_C + T_D = m \\cdot g
            \\]
            \\[
            \\Sigma M(G) = 0 \\to T_C \\cdot - T_D \\cdot d = 0 \\to T_C = T_D = \\frac{m \\cdot g}{2} = 58{,}84 \\, \\text{N}
            \\]
            <img src="https://Joel-avila.github.io/fotos/2019Exercici3.2Serie1_J.PNG" alt="Imatge relacionada amb la resposta">
            <br>

            <strong>b) Diagrama de cos lliure</strong>
            <br>
            <img src="https://Joel-avila.github.io/fotos/2019Exercici3.3Serie1_J.PNG" alt="Imatge relacionada amb la resposta">
            <br>

            <strong>c) L’angle</strong>
            <br>
            \\[
            φ = atan(\\frac{1}{3}) = 18{,}43°
            \\]
            <br>

            <strong>d) La força \\(T_{AB}\\)</strong>
            <br>
            \\[
            \\Sigma M(O) = 0
            \\]

            <strong>d) Les forces horitzontal i vertical </strong>
            <br>
            - Horitzontal
            \\[
            \\Sigma F_\\text{horitzontals} = 0 \\to F_H = T_{AB} \\cdot cos φ
            \\]
            -Vertical
            \\[
            \\Sigma F_\\text{verticals} = 0 \\to T_{AB} \\cdot sin φ + F_V = T_C + T_D
            \\]`,
    },

    //Exercici 4B
    {
        type: "exercicis",
        category: "energia",
        text: `Una caldera mixta de condensació funciona amb gas natural de poder calorífic 
               \\(p_c = 62 \\, \\text{MJ/kg}\\). La seva potència útil és \\(P_\\text{útil} = 28 \\, \\text{kW}\\) quan només subministra aigua calenta 
               i n’eleva la temperatura \\(ΔT = 25 \\, °C\\). En aquesta situació, el rendiment de la caldera és \\(\\eta_\\text{cald} = 0{,}87\\). Determineu:
               <br><strong>a)</strong> El cabal \\(q_\\text{aigua}\\) (en L/min) que subministra la caldera, tenint en compte que la calor específica de l’aigua és \\(c_e = 4,18 \\, \\frac{\\text{J}}{\\text{g °C}}\\). [0,5 punts]
               <br><strong>b)</strong> ) La potència consumida \\(P_\\text{cons}\\) i el consum de combustible \\(q_\\text{comb}\\) per unitat de temps. [1 punt]
               <br><strong>c)</strong> El temps t i el combustible m necessaris per a fer augmentar 25 °C la temperatura d’un volum d’aigua \\(V = 0,1 \\, m^3\\). [1 punt]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) El cabal</strong>
            <br>
            \\[
            P_\\text{útil} = \\frac{E_\\text{útil}}{t} = \\frac{m \\cdot c_e \\cdot ΔT}{t} = \\frac{\\rho_\\text{aigua}\\cdot V \\cdot c_e \\cdot ΔT}{t} = \\rho_\\text{aigua} \\cdot q_\\text{aigua} \\cdot c_e \\cdot ΔT
            \\]
            \\[
            q = \\frac{\\rho_\\text{aigua}}{c_e \\cdot ΔT} = \\frac{28}{4,18 \\cdot 25} = 0,268 \\, \\text{kg/s}
            \\]
            - Com que 1kg ≈ 1L:
            \\[
            q_\\text{aigua} = 0{,}268 \\, \\text{L/s} = 16{,}1 \\, \\text{L/min}
            \\]
            <br>

            <strong>b) Potència consumida i consum de combustible</strong>
            <br>
            - Potència consumida pel combustible:
            \\[
            \\eta = \\frac{P_u}{P_\\text{cons}} = \\frac{28}{0{,}87} = 32{,}2 \\, \\text{kW}
            \\]
            - Consum massic de combustible:
            \\[
            q_\\text{comb} = \\frac{32{,}2 \\text{kJ/s}}{62000 kJ/kg} = 5{,}19 \\cdot 10^{-4} \\, \\text{kg/s}
            \\]
            \\[
            q_\\text{comb} = 0,5191 \\, \\text{g/s}
            \\]
            <br>

            <strong>c) Temps i combustible per escalfar \\(V = 0,1 \\text{m}^3\\)</strong>
            <br>
            - Massa d’aigua:
            \\[
            m = 0,1 \\text{m}^3 = 100 \\, \\text{kg}
            \\]
            - Energia necessària:
            \\[
            Q = m \\cdot c_e \\cdot ΔT = 100 \\cdot 4,18 \\cdot 25 = 10450 \\, \\text{kJ}
            \\]
            - Temps:
            \\[
            t = \\frac{Q}{P_u} = \\frac{10450}{28} = 373 \\text{s} = 6{,}2 \\, \\text{min}
            \\]
            - Combustible necessari:
            \\[
            m_\\text{comb} = \\frac{Q}{\\eta \\cdot P_c} = \\frac{10450}{0,87 \\cdot 62000} = 0,1937 \\, \\text{kg}
            \\]
            <br>
            `,
    },

    //Serie 4
    //Questio 1 
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `El mòdul elàstic i el límit elàstic de l’acer són \\(E = 207 \\, \\text{GPa}\\) i \\(\\sigma_e = 50 \\, \\text{MPa}\\), respectivament. Si una peça cilíndrica de diàmetre \\(d = 3 \\text{mm}\\) elaborada amb aquest material està
               sotmesa a una força de tracció de \\(F_t = 1500 \\text{N}\\), quin és l’allargament unitari ε en tant per cent?`,
        options: [
            { text: "0,001025 %", value: "a" },
            { text: "0,1025 %", value: "b" },
            { text: "0,1691 %", value: "c" },
            { text: "0,001691 %", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            A = \\frac{\\pi \\cdot d^2}{4} = \\frac{\\pi \\cdot (0,003 , \\text{m})^2}{4} = 7,0686 \\cdot 10^{-6} , \\text{m}^2
            \\]
            \\[
            \\sigma = \\frac{F}{A} = \\frac{1500 , \\text{N}}{7,0686 \\cdot 10^{-6} , \\text{m}^2} = 212,206 \\cdot 10^6 , \\text{Pa} = 212,206 , \\text{MPa}
            \\]
            \\[
            \\varepsilon = \\frac{\\sigma}{E} = \\frac{212,206 \\cdot 10^6 , \\text{Pa}}{207 \\cdot 10^9 , \\text{Pa}} = 0,00102515
            \\]
            \\[
            varepsilon(%) = \\varepsilon \\cdot 100 = 0,00102515 \\cdot 100 = 0,102515 , %
            \\]
            <br>`
    },

    //Questio 2
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Un telefèric d’una estació d’esquí permet transportar un màxim de \\(40 \\, esquiadors\\) per
               trajecte des de la cota més baixa de l’estació fins a la més alta. El trajecte dura \\(3 \\, min\\), i el
               temps d’espera entre trajectes és de \\(45 \\, s\\). El telefèric funciona ininterrompudament de les
               9.00 h a les 18.00 h. L’ocupació mitjana de 9.00 h a 11.00 h i de 15.00 h a 18.00 h és del \\(60 \\, \\% \\),
               i la resta del dia és del \\(95 \\, \\% \\). Si el telefèric funciona 150 dies a l’any, quants esquiadors 
               transporta des de la cota més baixa fins a la més alta al cap de l’any?`,
        options: [
            { text: "816000", value: "a" },
            { text: "4352", value: "b" },
            { text: "686400", value: "c" },
            { text: "652800", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            Temps per trajecte:
            \\[
            3 \\, min + 0{,}75 \\, min = 3{,}75 \\, min
            \\]
            Trajectes per hora:
            \\[
            \\frac{60}{3{,}75} = 16
            \\]
            Capacitat màxima diària:
            \\[
            144 \\cdot 40 = 5760
            \\]
            <br>
            Mitjana:
            \\[
            0{,}6 \\cdot \\frac{5}{6} + 0{,}95 \\cdot \\frac{4}{9} = 0{,}756
            \\]
            Esquiadors per dia: 
            \\[
            5760 \\cdot 0{,}756 = 4352
            \\]
            Al any:
            \\[
            4352 \\cdot 150 = 652800
            \\]
            <br>`
    },

    //Questio 3
    {
        type: "questions", // Tipus de pregunta
        category: "electrics",
        text: `En un circuit elèctric, es connecten en paraŀlel dues resistències de valors R i 3R. Si la
               resistència equivalent és de 25 Ω, quin és el valor de la resistència R?`,
        options: [
            { text: "33,33 Ω", value: "a" },
            { text: "6,25 Ω", value: "b" },
            { text: "11,11 Ω", value: "c" },
            { text: "8,333 Ω", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            \\frac{1}{R_\\text{eq}} = \\frac{1}{R} + \\frac{1}{3R} 
            \\]
            \\[
            \\frac{1}{R_\\text{eq}} = \\frac{4}{3R}
            \\]
            \\[
            \\frac{1}{25} = \\frac{4}{3R}
            \\]
            \\[
            25 = \\frac{1}{\\frac{4}{3R}}
            \\]
            \\[
            25 = \\frac{3R}{4}
            \\]
            \\[
            R = \\frac{24 \\cdot 4}{3} = 33{,}33 \\,  \\text{Ω}
            \\]
            <br>`
    },
    
    //Questio 4    
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `En un ajust 50 H8/f7, la tolerància H8 del forat és \\(\\genfrac{}{}{0pt}{}{+39}{0} \\, \\mu\\text{m}\\), el joc màxim és \\(89 \\mu \\text{m}\\) i el
               joc mínim és \\(25 \\mu \\text{m}\\). Quina és la tolerància f7 de l’eix?`,
        options: [
            { text: "\\(\\genfrac{}{}{0pt}{}{+89}{-25} \\, \\mu\\text{m}\\)", value: "a" },
            { text: "\\(\\genfrac{}{}{0pt}{}{+50}{-25} \\, \\mu\\text{m}\\)", value: "b" },
            { text: "\\(\\genfrac{}{}{0pt}{}{+25}{-50} \\, \\mu\\text{m}\\)", value: "c" },
            { text: "\\(\\genfrac{}{}{0pt}{}{-25}{-50} \\, \\mu\\text{m}\\)", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            Relació entre jocs i toleràncies
            \\[
            J_\\text{màx} - J_\\text{mín} = T_\\text{H8} + T_\\text{f7}
            \\]
            \\[
            89 - 25 = 64 \\, \\mu \\text{m}
            \\]
            \\[
            T_\\text{H8} + T_\\text{f7} = 64 \\, \\mu \\text{m}
            \\]
            Tolerància de l'eix f7:
            \\[
            T_\\text{f7} = 64 - 39 = 25 \\, \\mu \\text{m}
            \\]
            Posició de l'eix f (zona negativa):
            \\[
            es = -25 \\, \\mu \\text{m}
            \\]
            Desviació inferior de l'eix:
            \\[
            ei = es - T_\\text{f7}
            \\]
            \\[
            ei = -25 - 25 = -50 \\, \\mu \\text{m}
            \\]
            <br>`
    },
    
    //Questio 5
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `En un gran premi de Fórmula 1, el consum mitjà de combustible d’un vehicle ha estat de
               \\(75 \\frac{L}{100 \\, km}\\). El combustible utilitzat té una densitat \\(\\rho = 0{,}75 \\, \\text{kg/L}\\). Si el circuit té una longitud
               \\(d = 5{,}488 \\, \\text{km}\\), quin ha estat el consum mitjà de combustible cm per volta del vehicle?`,
        options: [
            { text: "7,317 kg", value: "a" },
            { text: "4,116 kg", value: "b" },
            { text: "3,087 kg", value: "c" },
            { text: "5,488 kg", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            \\frac{75}{100} = 0{,}75 \\, \\text{L/km}
            \\]
            \\[
            0{,}75 \\cdot 5{,}488 = 4{,}116 \\, \\text{L}
            \\]
            \\[
            m = 4{,}116 \\cdot 0{,}75 = 3{,}087 \\, \\text{kg}
            \\]
            <br>`
    },

    //Exercici 2
    {
        type: "exercicis",
        category: "control",
        text: `La frenada automàtica d’emergència és un sistema de seguretat de l’automòbil que atura
               el vehicle per tal d’evitar accidents o minimitzar les conseqüències d’una coŀlisió. El sistema
               s’activa si un radar instaŀlat al vehicle detecta un obstacle en la part frontal o bé si el conductor inicia una frenada brusca. Per a detectar aquesta última acció, el sistema disposa de dos
               sensors instaŀlats al pedal de fre: un dels sensors mesura la velocitat de gir del pedal, i l’altre,
               la força que el conductor fa sobre el pedal. El sistema s’activa si la mesura de qualsevol dels
               dos sensors (velocitat i força) supera un llindar determinat. Responeu a les qüestions que hi
               ha a continuació utilitzant les variables d’estat següents:
               <br><br><img src="https://Joel-avila.github.io/fotos/2019Exercici2Serie4_J.PNG" alt="Imatge relacionada amb la pregunta"><br>
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [0,5 punts]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            
            <strong>a) Taula de verita</strong>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>x</th>
                        <th>s</th>
                        <th>c</th>
                        <th>p</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>0</td><td>0</td><td>0</td><td>1</td></tr>
                    <tr><td>0</td><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>0</td><td>1</td><td>0</td><td>1</td></tr>
                    <tr><td>0</td><td>1</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
                </tbody>
            </table>
            <br>
            
            <strong>b) La funció lògica</strong>
            \\[
            c = \\bar{r} + v + f 
            \\]
            <br>

            <strong>c) Esquema de portes lògiques</strong>
            <br><br>
            <img src="https://Joel-avila.github.io/fotos/2019Exercici2.2Serie4_J.PNG" alt="Imatge relacionada amb la resposta">
            <br>`,
    },

    //Exercici 3A
    {
        type: "exercicis",
        category: "electrics",
        text: `<br><img src="https://Joel-avila.github.io/fotos/2019Exercici3Serie4_J.PNG" alt="Imatge relacionada amb la pregunta">
               Una llanterna consta de cinc leds connectats en paraŀlel. Quan la llanterna emet llum 
               blanca, la caiguda de tensió de cada led és \\(U_\\text{led} = 3,4 \\text{V}\\). La llanterna s’alimenta amb tres 
               piles connectades en sèrie. Cada pila proporciona una tensió \\(U_\\text{pila} = 1,5 \\text{V}\\) i té una capacitat 
               \\(c_\\text{pila} = 1100 \\text{mAh}\\). Connectada en sèrie amb cada led hi ha una resistència \\(R\\). Si per cada led hi 
               passa un corrent \\(I_\\text{led} = 10 \\text{mA}\\), determineu:
               <br>
               <br><strong>a)</strong> El valor de la resistència \\(R\\). [0,5 punts]
               <br><strong>b)</strong> L’energia consumida \\(E_\\text{total}\\) en \\(t = 5 h\\) de funcionament. [0,5 punts]
               <br><strong>c)</strong> El temps \\(t_\\text{piles}\\) que duren les piles. [0,5 punts]
               <br>
               <br>Una llanterna de gamma superior incorpora, a més, un circuit equivalent a l’anterior 
               (amb la mateixa resistència R) per a fer llum intermitent en situació d’emergència. En aquest 
               cas, s’utilitzen leds que emeten llum taronja, els quals tenen una caiguda de tensió Uled,2 = 2 V. 
               Si només funciona el circuit que fa llum intermitent, determineu:
               <br><strong>d)</strong> El nou corrent \\(I_\\text{led,2}\\) que circula per cada led. [0,5 punts]
               <br><strong>e)</strong> L’energia consumida \\(E_\\text{total,2}\\) en \\(t = 5 h\\) de funcionament de la llanterna si, quan fa llum intermitent, la llanterna està 2 s emetent llum i 1 s sense emetre’n. [0,5 punts]
               <br>`,
               
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Valor de la resistència</strong>
            <br>
            - Les piles estan connectades en sèrie:
            \\[
            U_{\\text{piles}} = 3 \\cdot 1{,}5 = 4{,}5 \\, \\text{V}
            \\]
            - Calculem la resistència
            \\[ 
            U_R = U_{\\text{piles}} - U_{\\text{led}} 
            \\]
            \\[ 
            U_R = 4{,}5 - 3{,}4 = 1{,}1 \\, \\text{V} 
            \\]
            \\[ 
            R = \\frac{U_R}{I_{\\text{led}}} 
            \\]
            \\[ 
            R = \\frac{1{,}1}{0{,}01} = 110 \\, \\Omega 
            \\]
            <br>

            <strong>b) L’energia consumida \\(E_\\text{total}\\)</strong>
            <br>
            - Corrent total (cinc LEDs en paral·lel):
            \\[
            I_{\\text{total}} = 5 \\cdot 0{,}01 = 0{,}05 \\, \\text{A}
            \\]
            - Potència total:
            \\[ 
            P_{\\text{total}} = U_{\\text{piles}} \\cdot I_{\\text{total}} 
            \\]
            \\[ P_{\\text{total}} = 4{,}5 \\cdot 0{,}05 = 0{,}225 \\, \\text{W} 
            \\]
            - Energia consumida:
            \\[ 
            E_{\\text{total}} = P_{\\text{total}} \\cdot t 
            \\]
            \\[ 
            E_{\\text{total}} = 0{,}225 \\cdot 5 = 1{,}125 \\, \\text{Wh} 
            \\]
            \\[ 
            E_{\\text{total}} = 1{,}125 \\cdot 3600 = 4{,}05 \\cdot 10^3 \\, \\text{J} 
            \\]
            <br>

            <strong>c) Temps que duren les piles</strong>
            <br>
            - Corrent total:
            \\[
            I_{\\text{total}} = 0{,}05 \\, \\text{A}
            \\]
            - Temps de funcionament:
            \\[ 
            t_{\\text{piles}} = \\frac{c_{\\text{pila}}}{I_{\\text{total}}} 
            \\]
            \\[ 
            t_{\\text{piles}} = \\frac{1{,}1}{0{,}05} = 22 \\, \\text{h} 
            \\]
            <br>

            <strong>d) Nou corrent amb LEDs taronja</strong>
            <br>
            - Tensió a la resistència:
            \\[ 
            U_{R,2} = U_{\\text{piles}} - U_{\\text{led,2}} 
            \\]
            \\[ 
            U_{R,2} = 4{,}5 - 2 = 2{,}5 \\, \\text{V} 
            \\]
            - Corrent nou:
            \\[ 
            I_{\\text{led,2}} = \\frac{U_{R,2}}{R} 
            \\]
            \\[ 
            I_{\\text{led,2}} = \\frac{2{,}5}{110} = 2{,}27 \\cdot 10^{-2} \\, \\text{A} 
            \\]
            \\[ 
            I_{\\text{led,2}} = 22{,}7 \\, \\text{mA} 
            \\]
            <br>

            <strong>e) Energia consumida amb llum intermitent</strong>
            <br>
            - Temps encès:
            \\[
            t_{\\text{on}} = \\frac{2}{3} \\cdot 5 = 3{,}33 \\, \\text{h}
            \\]
            - Corrent total:
            \\[
            I_{\\text{total,2}} = 5 \\cdot 0{,}0227 = 0{,}1135 \\, \\text{A}
            \\]
            - Potència:
            \\[
            P_{\\text{total,2}} = U_{\\text{piles}} \\cdot I_{\\text{total,2}} 
            \\]
            \\[ 
            P_{\\text{total,2}} = 4{,}5 \\cdot 0{,}1135 = 0{,}511 \\, \\text{W}
            \\]
            - Energia consumida:
            \\[
            E_{\\text{total,2}} = P_{\\text{total,2}} \\cdot t_{\\text{on}} 
            \\]
            \\[ 
            E_{\\text{total,2}} = 0{,}511 \\cdot 3{,}33 = 1{,}70 \\, \\text{Wh} 
            \\]
            \\[ 
            E_{\\text{total,2}} = 1{,}70 \\cdot 3600 = 6{,}12 \\cdot 10^3 \\, \\text{J}
            \\]
            <br>`,
    },

    //Ecercici 4A
    {
        type: "exercicis",
        category: "energia",
        text: `<br><img src="https://Joel-avila.github.io/fotos/2019Exercici4Serie4_J.PNG" alt="Imatge relacionada amb la pregunta">
               L’energia mareomotriu és un tipus d’energia hidràulica que s’obté a partir de les marees. 
               Per tal de convertir aquesta energia en electricitat, s’utilitzen sistemes com el de la figura, formats per una turbina que gira impulsada per la marea, un multiplicador d’engranatges i un 
               generador elèctric. El sistema que s’estudia genera una potència elèctrica \\(P_\\text{elèctr} = 1 000 \\, \\text{kW}\\) en 
               condicions nominals. En aquestes condicions, l’eix de sortida de la turbina gira a \\(n_1 = 10\\, \\text{min}^{-1}\\), 
               i l’eix d’entrada al generador, a \\(n_2 = 1 500 \\, \\text{min}^{-1}\\). El rendiment del generador és \\(\\eta_\\text{gen} = 0,87\\) i el 
               parell a l’eix de sortida de la turbina és \\(\\Gamma_1 = 1400 \\, \\text{kN m}\\). Si el sistema funciona en condicions nominals, determineu:
               <br><strong>a)</strong> La potència \\(P_2\\) i el parell \\(\\Gamma_2\\) a l’eix d’entrada al generador. [1 punt]
               <br><strong>b)</strong> El rendiment del multiplicador \\(\\eta_\\text{mult}\\) i la relació de transmissió \\(\\tau\\). [1 punt]
               <br><strong>c)</strong> La potència total dissipada \\(P_\\text{diss}\\) en el multiplicador i el generador. [0,5 punts]
               <br>`,
               
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Potència \\(P_2\\) i parell \\(\\Gamma_2\\) a l’eix d’entrada del generador</strong>
            <br>
            - Relació entre la potència elèctrica i la potència mecànica d’entrada al generador:
            \\[
            P_{\\text{elèctr}} = \\eta_{\\text{gen}} \\cdot P_2 \\]
            \\[ 
            P_2 = \\frac{P_{\\text{elèctr}}}{\\eta_{\\text{gen}}} \\]
            \\[ 
            P_2 = \\frac{1{,}0 \\cdot 10^6}{0{,}87} = 1{,}15 \\cdot 10^6 \\, \\text{W}
            \\]
            - Conversió de velocitat angular:
            \\[ 
            \\omega_2 = 1500 \\, \\frac{\\text{rev}}{\\text{min}} \\cdot \\frac{2\\pi \\, \\text{rad}}{1 \\, \\text{rev}} \\cdot \\frac{1 \\, \\text{min}}{60 \\, \\text{s}} = 157 \\, \\text{rad/s} 
            \\]
            - Relació entre potència i parell:
            \\[ 
            P_2 = \\Gamma_2 \\cdot \\omega_2 
            \\]
            \\[ 
            \\Gamma_2 = \\frac{P_2}{\\omega_2} 
            \\]
            \\[ 
            \\Gamma_2 = \\frac{1{,}15 \\cdot 10^6}{157} = 7{,}33 \\cdot 10^3 \\, \\text{N·m} 
            \\]
            <br>

            <strong>b) Rendiment del multiplicador i relació de transmissió</strong>
            <br>
            - Conversió de velocitat angular de la turbina:
            \\[
            \\omega_1 = 10 \\, \\frac{\\text{rev}}{\\text{min}} \\cdot \\frac{2\\pi}{60} = 1{,}05 \\, \\text{rad/s}
            \\]
            - Potència mecànica a l’eix de sortida de la turbina:
            \\[ 
            P_1 = \\Gamma_1 \\cdot \\omega_1 
            \\]
            \\[ 
            P_1 = 1{,}4 \\cdot 10^6 \\cdot 1{,}05 = 1{,}47 \\cdot 10^6 \\, \\text{W} 
            \\]
            - Rendiment del multiplicador:
            \\[ 
            \\eta_{\\text{mult}} = \\frac{P_2}{P_1} 
            \\]
            \\[ 
            \\eta_{\\text{mult}} = \\frac{1{,}15 \\cdot 10^6}{1{,}47 \\cdot 10^6} = 0{,}78 
            \\]
            - Relació de transmissió:
            \\[ 
            \\tau = \\frac{n_2}{n_1} 
            \\]
            \\[ 
            \\tau = \\frac{1500}{10} = 150 
            \\]
            <br>

            <strong>c) Potència total dissipada en el multiplicador i el generador</strong>
            <br>
            - Potència dissipida al multiplicador:
            \\[
            P_{\\text{diss,mult}} = P_1 - P_2 
            \\]
            \\[ 
            P_{\\text{diss,mult}} = 1{,}47 \\cdot 10^6 - 1{,}15 \\cdot 10^6 = 3{,}2 \\cdot 10^5 \\, \\text{W}
            \\]
            - Potència dissipida al generador:
            \\[ 
            P_{\\text{diss,gen}} = P_2 - P_{\\text{elèctr}} 
            \\]
            \\[ 
            P_{\\text{diss,gen}} = 1{,}15 \\cdot 10^6 - 1{,}0 \\cdot 10^6 = 1{,}5 \\cdot 10^5 \\, \\text{W} 
            \\]
            - Potència total dissipida:
            \\[ 
            P_{\\text{diss}} = P_{\\text{diss,mult}} + P_{\\text{diss,gen}} 
            \\]
            \\[ 
            P_{\\text{diss}} = 3{,}2 \\cdot 10^5 + 1{,}5 \\cdot 10^5 = 4{,}7 \\cdot 10^5 \\, \\text{W} 
            \\]
            <br>`,
    },

    //Exercici 3B
    {
        type: "exercicis",
        category: "materials",
        text: `<br><img src="https://Joel-avila.github.io/fotos/2019Exercici3.2Serie4_J.PNG" alt="Imatge relacionada amb la pregunta">
               Uns enginyers dissenyen un prototip de braç robòtic de baix cost format per peces que 
               s’elaboren amb una impressora 3D. Entre aquestes peces, hi ha les dues que es mostren en 
               la figura, que són idèntiques entre si i formen una pinça situada a l’element terminal del 
               robot. Es tracta de peces planes que tenen un gruix \\(s = 15\\, \\text{mm}\\) i un forat rodó de diàmetre 
               \\(d = 10 \\, \\text{mm}\\). La impressora fabrica les peces massisses de plàstic a còpia d’anar dipositant 
               capes horitzontals de gruix \\(e = 0,2\\, \\text{mm}\\). S’alimenta amb un filament de PLA (àcid polilàctic) 
               de radi \\(r = 1,5 \\,\\text{mm}\\) i densitat \\(\\rho = 1 250 \\,\\text{kg/m}^3\\) que passa per un extrusor, on s’escalfa i es prem 
               per a poder-lo dipositar adequadament. Determineu:
               <br><strong>a)</strong> El volum V i la massa m totals de les dues peces construïdes. [1 punt]
               <br><strong>b)</strong> La longitud L del filament de PLA utilitzat. [0,5 punts]
               <br><strong>c)</strong> El nombre mínim n de capes que ha dipositat la impressora fins a completar les peces. [0,5 punts]
               <br>`,
               
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Volum i massa de les dues peces</strong>
            <br>
            - Àrea del rectangle inferior
            \\[
            A_R = L_3 \\cdot L_2 = 25 \\, \\text{mm} \\cdot 30 \\, \\text{mm} = 750 \\, \\text{mm}^2
            \\]
            - Alçada del trapezi superior
            \\[
            h_T = L_1 - L_2 = 60 \\, \\text{mm} - 30 \\, \\text{mm} = 30 \\, \\text{mm}
            \\]
            - Àrea del trapezi superior
            \\[
            A_T = \\frac{L_3 + L_4}{2} \\cdot h_T
            \\]
            \\[
            A_T = \\frac{25 + 12{,}5}{2} \\cdot 30 = 562{,}5 \\, \\text{mm}^2
            \\]
            - Àrea del forat circular
            \\[
            r_f = \\frac{d}{2} = \\frac{10}{2} = 5 \\, \\text{mm}
            \\]
            \\[
            A_F = \\pi r_f^2 = \\pi \\cdot 5^2 = 78{,}54 \\, \\text{mm}^2
            \\]
            - Àrea total d'una peça
            \\[
            A = A_R + A_T - A_F
            \\]
            \\[
            A = 750 + 562{,}5 - 78{,}54 = 1233{,}96 \\, \\text{mm}^2
            \\]
            - Volumen de una pieza
            \\[
            V_1 = A \\cdot s = 1233{,}96 \\, \\text{mm}^2 \\cdot 15 \\, \\text{mm}
            \\]
            \\[
            V_1 = 18509{,}4 \\, \\text{mm}^3
            \\]
            - Volum total (dues peces)
            \\[
            V = 2 \\cdot V_1 = 2 \\cdot 18509{,}4 = 37018{,}8 \\, \\text{mm}^3
            \\]
            \\[
            V = 3{,}7019 \\cdot 10^{-5} \\, \\text{m}^3
            \\]
            - Massa total
            \\[
            m = \\rho \\cdot V
            \\]
            \\[
            m = 1250 \\, \\frac{\\text{kg}}{\\text{m}^3} \\cdot 3{,}7019 \\cdot 10^{-5} \\, \\text{m}^3
            \\]
            \\[
            m = 4{,}63 \\cdot 10^{-2} \\, \\text{kg} = 46{,}3 \\, \\text{g}
            \\]
            <br>

            <strong>b) Longitud del filament de PLA</strong>
            <br>
            - Àrea de la secció del filament
            \\[
            A_f = \\pi r^2 = \\pi \\cdot 1{,}5^2 = 7{,}07 \\, \\text{mm}^2
            \\]
            - Longitud del filamento
            \\[
            L = \\frac{V}{A_f}
            \\]
            \\[
            L = \\frac{37018{,}8 \\, \\text{mm}^3}{7{,}07 \\, \\text{mm}^2}
            \\]
            \\[
            L = 5236 \\, \\text{mm} = 5{,}24 \\, \\text{m}
            \\]
            <br>

            <strong>c) Nombre mínim de capes</strong>
            <br>
            \\[
            n = \\frac{s}{e}
            \\]
            \\[
            n = \\frac{15 \\, \\text{mm}}{0{,}2 \\, \\text{mm}} = 75
            \\]
            <br>`,
    },

    //Exercici 4B
    {
        type: "exercicis",
        category: " ... ",
        text: `Un ascensor d’acció directa funciona mitjançant un cilindre hidràulic connectat directament a la part inferior de la cabina de l’ascensor en direcció vertical. El cilindre té un diàmetre 
               interior \\(d_\\text{int} = 90 \\, \\text{mm}\\) i el diàmetre de la tija és \\(d_\\text{tija} = 70 \\, \\text{mm}\\). La massa conjunta de la cabina 
               i la càrrega és \\(m = 1 170 \\, \\text{kg}\\), i les altres masses es consideren negligibles. Quan l’ascensor eleva 
               la cabina i la càrrega a una velocitat constant \\(v = 0,33 \\text{m/s}\\), la bomba que alimenta el pistó 
               consumeix una potència elèctrica \\(P_\\text{elèctr} = 5 300 \\text{W}\\). Si el rendiment de la bomba és \\(\\eta_b = 0,85\\), 
               determineu:
               <br><strong>a)</strong> El cabal q i la pressió p de l’oli que subministra la bomba. [1 punt]
               <br><strong>b)</strong> La força \\(F_\\text{ch}\\)  que fa el cilindre hidràulic i la pressió relativa \\(p_\\text{int}\\) a l’interior del cilindre. [1 punt]
               <br><strong>c)</strong> El rendiment \\(\\eta_\\text{ch}\\) del cilindre hidràulic i la potència total dissipada \\(P_\\text{diss}\\) en la bomba i el cilindre. [1 punt]
               <br>`,
               
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Cabal q i pressió p de l'oli subministrat per la bomba</strong>
            <br>
            - Càlcul de la secció del pistó:
            \\[ 
            A = \\frac{\\pi \\cdot d_{int}^2}{4} = \\frac{\\pi \\cdot 0,09^2}{4} = 6,3617 \\cdot 10^{-3} , \\text{m}^2 
            \\]
            - Càlcul del cabal:
            \\[ 
            q = A \\cdot v = 6,3617 \\cdot 10^{-3} , \\text{m}^2 \\cdot 0,33 , \\text{m/s} = 2,099 \\cdot 10^{-3} , \\text{m}^3\\text{/s} 
            \\]
            - Càlcul de la pressió de la bomba:
            \\[ 
            P_{hyd} = P_{electr} \\cdot \\eta_b = 5300 , \\text{W} \\cdot 0,85 = 4505 , \\text{W} 
            \\] 
            \\[ 
            p = \\frac{P_{hyd}}{q} = \\frac{4505 , \\text{W}}{2,099 \\cdot 10^{-3} , \\text{m}^3\\text{/s}} = 2,146 \\cdot 10^6 , \\text{Pa} = 2,146 , \\text{MPa} 
            \\]
            <br>

            <strong>b) Força \\(F_\\text{ch}\\) i pressió interior \\(p_\\text{int}\\)</strong>
            <br>
            - Força del cilindre
            \\[ 
            F_{ch} = m \\cdot g = 1170 , \\text{kg} \\cdot 9,81 , \\text{m/s}^2 = 11477,7 , \\text{N} 
            \\]
            - Pressió interior
            \\[
            p_{int} = \\frac{F_{ch}}{A} = \\frac{11477,7 , \\text{N}}{6,3617 \\cdot 10^{-3} , \\text{m}^2} = 1,804 \\cdot 10^6 , \\text{Pa} = 1,804 , \\text{MPa} 
            \\]
            <br>

            <strong>c) Rendiment \\(\\eta_\\text{ch}\\) i potència dissipada \\(P_\\text{diss}\\)</strong>
            <br>
            - Rendiment del cilindre
            \\[ 
            P_{util} = F_{ch} \\cdot v = 11477,7 , \\text{N} \\cdot 0,33 , \\text{m/s} = 3787,6 , \\text{W} 
            \\] 
            \\[ 
            \\eta_{ch} = \\frac{P_{util}}{P_{hyd}} = \\frac{3787,6 , \\text{W}}{4505 , \\text{W}} = 0,8407 = 84,07 % 
            \\]
            - Potència total dissipada
            \\[ 
            P_{diss} = P_{electr} - P_{util} = 5300 , \\text{W} - 3787,6 , \\text{W} = 1512,4 , \\text{W} 
            \\]
            <br>`,
    },

    //Serie 5
    //Questio 1
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatica",
        text: `Un cargol de pas \\(p = 1{,}25 \\text{mm}\\) avança a una velocitat \\(v = 5 \\text{mm/s}\\) quan es cargola a una
               femella fixa. Quina és la velocitat angular de gir del cargol?`,
        options: [
            { text: "20,94 rad/s", value: "a" },
            { text: "25,13 rad/s", value: "b" },
            { text: "157,9 rad/s", value: "c" },
            { text: "125,7 rad/s", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            n = \\frac{v}{p} = \\frac{5}{1{,}25} = 4 \\, \\text{rev/s}
            \\]
            \\[
            \\omega = 2 \\cdot \\pi \\cdot n = 2 \\cdot \\pi \\cdot 4 = 25,13 \\, \\text{rad/s}
            \\]
            <br>`
    },

    //Questio 2
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Una empresa comercialitza un model nou d’impressora 3D. El cost unitari de producció és de \\(500 \\text{€}\\). Durant el primer any, l’empresa vol recuperar \\(250 000 \\text{€}\\) de la inversió
               inicial, obtenir un benefici mínim de \\(50 000 \\text{€}\\) i pagar les despeses de fabricació de totes les
               unitats venudes. Si s’ha fixat un preu de venda unitari de \\(950 \\text{€}\\), quin ha de ser el nombre
               mínim d’unitats venudes?`,
        options: [
            { text: "600", value: "a" },
            { text: "316", value: "b" },
            { text: "207", value: "c" },
            { text: "667", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            950 - 500 = 450 \\, \\text{€}
            \\]
            \\[
            250000 + 50000 = 300000 \\, \\text{€}
            \\]
            \\[
            n = \\frac{300000}{450} = 666,7
            \\]
            \\[
            n = 667
            \\]
            <br>`
    },

    //Questio 3
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `Una barra massissa de secció circular de \\(r = 5 \\text{mm}\\) de radi pot aguantar una força de tracció
               de fins a \\(8{,}1 \\text{kN}\\) sense trencar-se. Quina és la resistència a la ruptura del material de la barra?`,
        options: [
            { text: "103,1 MPa", value: "a" },
            { text: "200 MPa", value: "b" },
            { text: "324 MPa", value: "c" },
            { text: "412,5 MPa", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            r = 5 \\text{mm} = 0{,}005 \\, \\text{m}
            \\]
            \\[
            A = \\pi \\cdot r^2 = \\pi \\cdot 0{,}005^2 = 7{,}85 \\cdot 10^{-5} \\text{m}^2
            \\]
            \\[
            F = 8{,}1 \\text{kN} = 8100\\text{N}
            \\]
            \\[
            \\sigma = \\frac{F}{A} = \\frac{8100}{7{,}85 \\cdot 10^{-5}} = 103{,}1 \\text{MPa}
            \\]
            <br>`
    },

    //Questio 4
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `Un motor asíncron de corrent altern de \\(p = 4 \\text{parells}\\) de pols té un lliscament relatiu
               \\(s = 0,07\\). Si està connectat a la xarxa de tensió \\(U = 230 \\text{V}\\) i freqüència \\(f = 50 \\text{Hz}\\), a quina velocitat n gira?`,
        options: [
            { text: "\\(2 790 \\, \\text{min}^{-1}\\)", value: "a" },
            { text: "\\(750 \\, \\text{min}^{-1}\\)", value: "b" },
            { text: "\\(1 395 \\, \\text{min}^{-1}\\)", value: "c" },
            { text: "\\(697,5 \\, \\text{min}^{-1}\\)", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            n_s = \\frac{60\\cdot f}{p} = \\frac{60\\cdot 50}{4} = 750 \\, \\text{rpm}
            \\]
            \\[
            n = n_s \\cdot (1 - s) = 750 \\cdot 0{,}93 = 697{,}5 \\text{rpm}
            \\]
            <br>`
    },

    //Questio 5
    {
        type: "questions", // Tipus de pregunta
        category: "electrics",
        text: `Un cilindre hidràulic d’una sola tija ha de poder efectuar una força de \\(F = 25 \\text{kN}\\) en la cursa
               d’avanç. Si el diàmetre del cilindre és de \\(d_c = 40 \\text{mm}\\) i el de la tija és de \\(d_c = 25 \\text{mm}\\), quina pressió ha
               de proporcionar el grup hidràulic?`,
        options: [
            { text: "25,13 MPa", value: "a" },
            { text: "32,65 MPa", value: "b" },
            { text: "19,89 MPa", value: "c" },
            { text: "4,974 MPa", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            d_c = 40 \\, \\text{mm} = 0,04\\,\\text{m}
            \\]
            \\[
            A = \\frac{\\pi \\cdot d_\\text{c}^2}{4} = \\frac{\\pi \\cdot 0,04^2}{4} = 1{,}257\\cdot10^{-3}\\,\\text{m}^2
            \\]
            \\[
            F = 25 \\, \\text{kN} = 25000 \\, \\text{N}
            \\]
            \\[
            P = \\frac{F}{A} = \\frac{25000}{1{,}257\\cdot10^{-3}} = 19{,}89 \\, \\text{MPa}
            \\]
            <br>`
    },

    //Exercici 2
    {
        type: "exercicis",
        category: "control",
        text: `Un sistema de reg inteŀligent utilitza tres sensors per a determinar si cal regar un parc
               d’una ciutat al final del dia. Els sensors mesuren la radiació solar (S), la humitat del terra (H)
               i la temperatura (T). Les condicions ambientals favorables al reg són: una radiació solar per
               sobre d’un llindar \\(S_\\text{lim}\\), una humitat del terra per sota de \\(h_\\text{lim}\\) i una temperatura per sobre de
               \\(T_\\text{lim}\\). El sistema determina que cal regar si almenys dues de les tres condicions ambientals són
               favorables al reg. Responeu a les qüestions que hi ha a continuació utilitzant les variables
               d’estat següents:
               <br><br><img src="https://Joel-avila.github.io/fotos/2019Exercici2Serie5_J.PNG" alt="Imatge relacionada amb la pregunta"><br>
               <br><strong>a)</strong> Escriviu la taula de veritat del sistema. [0,5 punts]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            
            <strong>a) Taula de verita</strong>
            <br>
            <table>
                <thead>
                    <tr>
                        <th>x</th>
                        <th>s</th>
                        <th>c</th>
                        <th>p</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>0</td><td>1</td><td>0</td><td>0</td></tr>
                    <tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>
                    <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>
                    <tr><td>1</td><td>0</td><td>1</td><td>1</td></tr>
                    <tr><td>1</td><td>1</td><td>0</td><td>0</td></tr>
                    <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
                </tbody>
            </table>
            <br>
            
            <strong>b) La funció lògica</strong>
            \\[
            r = \\bar{s} \\cdot \\bar{h} \\cdot t + s \\cdot \\bar{h} \\cdot \\bar{t} + s \\cdot \\bar{h} \\cdot t + s \\cdot h \\cdot t
            \\]
            \\[
            r = s \\cdot \\bar{h} + s \\cdot t + \\bar{h} \\cdot t
            \\]
            <br>

            <strong>c) Esquema de portes lògiques</strong>
            <br><br>
            <img src="https://Joel-avila.github.io/fotos/2019Exercici2.2Serie5_J.PNG" alt="Imatge relacionada amb la resposta">
            <br>`,
    },

    //Exercici 3A
    {
        type: "exercicis",
        category: "energia",
        text: `<br><img src="https://Joel-avila.github.io/fotos/2019Exercici3Serie5_J.PNG" alt="Imatge relacionada amb la resposta">
               <br>
               La tapa de la figura té una massa \\(m = 30 \\text{kg}\\) i el centre de masses en el punt G. S’obre estirant-la per la nansa A amb una força F perpendicular a la tapa, i s’uneix a terra per mitjà de
               dues barres idèntiques que tenen un extrem articulat a la tapa i l’altre extrem articulat a terra.
               La massa de les barres es considera negligible. L’angle de les barres varia entre 10° ≤ φ ≤ 120°.
               <br><strong>a)</strong> Dibuixeu el diagrama de cos lliure de la tapa per a un angle φ qualsevol. [0,5 punts]
               <br><br>
               Considerant que la tapa està en repòs, determineu:
               <br><br><strong>b)</strong>  El valor de la força F aplicada a la nansa quan φ = 60°. [1 punt]
               <br><strong>c)</strong> El valor de les forces \\(F_B\\) i \\(F_C\\) que fan les barres sobre la tapa quan φ = 60°. [0,5 punts]
               <br><strong>d)</strong> L’angle φ per al qual la força que fa la barra en el punt C en valor absolut |\\(F_C\\)| és mínima, i el valor d’aquesta força. [0,5 punts]
               <br>`,  // Imatge opcional al final de la pregunta
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Diagrama de cos lliure</strong>
            <br>
            <img src="https://Joel-avila.github.io/fotos/2019Exercici3.2Serie5_J.PNG" alt="Imatge relacionada amb la resposta">
            <br>

            <strong>b) La força F</strong>
            <br>
            - Horitzontal
            \\[
            \\Sigma F_\\text{horitzontals} = 0
            \\]
            \\[
            (F_C + F_B) \\cdot cos(φ) = 0
            \\]
            \\[
            F_C = -F_B
            \\]
            - Vertical
            \\[
            \\Sigma F_\\text{verticals} = 0
            \\]
            \\[
            (F_C + F_B) \\cdot sin(φ) + F - m\\cdot g = 0
            \\]
            \\[
            F = m\\cdot g = 30 kg \\cdot 9,81 = 294,2 \\, \\text{N}
            \\]
            <br>

            <strong>c) Les forces \\(F_B\\) i \\(F_C\\)</strong>
            <br>
            \\[
            \\Sigma M(C) = 0
            \\]
            \\[
            F \\cdot 2 \\cdot L - m \\cdot g \\cdot L + F_B \\cdot sin φ (\\frac{L}{2}) = 0
            \\]
            - \\(F_B\\)
            \\[
            F_B = \\frac{2(m\\cdot g - 2\\cdot F)}{sin φ} = \\frac{-2 \\cdot 30 \\cdot 9,81}{sin(60°)} = \\frac{-2\\cdot 294,3}{sin(60°)} = \\frac{- 588,6}{0,866} = - 679,4 \\, \\text{N}
            \\]
            - \\(F_C\\)
            \\[
            F_C = \\frac{2 \\cdot m\\cdot g}{sin φ} = \\frac{2 \\cdot 30 \\cdot 9,81}{sin(60°)} = \\frac{2\\cdot 294,3}{sin(60°)} = \\frac{588,6}{0,866} = 679,4 \\, \\text{N}
            \\]
            <br>

            <strong>d) La força |\\(F_C\\text{minima}\\)| </strong>
            <br>
            - Angle 90°
            \\[
            F_C \\text{min} = \\frac{2 \\cdot m\\cdot g}{sin φ} = \\frac{2 \\cdot 30 \\cdot 9,81}{sin(90°)} = \\frac{2\\cdot 294,3}{sin(90°)} = \\frac{588,6}{1} = 588,6 \\, \\text{N}
            \\]
            <br>`, 
    },

    //Exercici 4A
    {
        type: "exercicis",
        category: "energia",
        text: `Un escalfador elèctric d’aigua s’alimenta amb una tensió \\(U = 230 \\text{V}\\) i consumeix una 
               potència elèctrica \\(P_\\text{elèctr} = 1{,}5 \\text{kW}\\). L’escalfador tarda \\(t = 2 \\text{h} i 5 \\text{min}\\) a escalfar un volum \\(V = 50 \\text{L}\\) 
               d’aigua des de \\(T_1 = 15 \\text{°C }\\) fins a \\(T_2 = 65 \\text{°C }\\) per mitjà d’una resistència elèctrica. La calor específica de l’aigua és \\(c_e = 4{,}18 \\frac{\\text{kJ}}{\\text{kg \\cdot °C}} \\) i el cost de l’energia elèctrica és   \\(c = 0{,}125 \\frac{\\text{€}}{kW\\cdot h}\\). 
               Determineu:
               <br><strong>a)</strong> L’energia E necessària per a escalfar el volum V d’aigua des de \\(T_1\\) fins a \\(T_2\\). [0,5 punts]
               <br><strong>b)</strong> L’energia elèctrica \\(E_\\text{elèctr}\\), en kW h, consumida per a escalfar el volum \\(V\\) d’aigua des de \\(T_1\\) fins a \\(T_2\\), i el cost \\(c_\\text{elèctr}\\) de l’energia elèctrica necessària per a dur a terme aquest procés. [0,5 punts]
               <br><strong>c)</strong> El rendiment \\(\\eta\\) de l’escalfador elèctric d’aigua. [0,5 punts]
               <br><strong>d)</strong> La resistivitat \\(\\rho\\) del material de la resistència, si aquesta està formada per un fil conductor de diàmetre d = 0,25 mm i longitud L = 1 500 mm. [1 punt]
               <br>`, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) L’energia necessària </strong>
            <br>
            \\[
            E = \\rho \\cdot V \\cdot c_e \\cdot \\Delta T = 1 \\cdot 50 \\cdot 4{,}18 \\cdot 50 = 10450 \\, \\text{kJ}
            \\]
            <br>

            <strong>b) L’energia elèctrica i cost</strong>
            <br>
            - Energia elèctrica
            \\[
            t = 2h + 5 min \\cdot \\frac{60 min}{1 h} = 2h + 0,0833h = 2,0833h
            \\]
            \\[
            E_\\text{elèc} = P_\\text{elèc} \\cdot t = 1{,}5 \\cdot 2{,}0833 = 3,125 \\, \\text{kW h} = 11250 kJ
            \\]
            - Cost
            \\[
            c_\\text{elèc} = c \\cdot E_\\text{elèc} = 0{,}125 \\cdot 3,125 = 0,3906 \\, \\text{€}
            \\]
            <br>

            <strong>c) El rendiment</strong>
            <br>
            \\[
            \\eta = \\frac{E}{E_\\text{elèc}} = \\frac{10450}{11250} = 0{,}9289 = 92{,}89 \\%
            \\]
            <br>
            <strong>d) La resistivitat</strong>
            <br>
            \\[
            R = \\frac{U^2}{P_\\text{elèc}} = \\frac{230^2}{1500} = 35{,}27\\,\\Omega
            \\]
            <br>`,
    },

    //Exercici 3B
    {
        type: "exercicis",
        category: "pneumatica",
        text: `Una escala mecànica transporta passatgers que pugen una altura \\(Δh = 6 \\text{m}\\) en un temps \\(t_p = 45 \\text{s}\\). 
               La massa mitjana d’un passatger s’estima en \\(m_p = 70{,}8 \\text{kg}\\). L’escala transporta de mitjana \\(n_p = 20 \\text{passatgers}\\) 
               de manera simultània i funciona durant \\(t_t = 10 \\text{h}\\) al dia.
               Quan l’escala treballa en buit (sense passatgers) consumeix una potència elèctrica 
               \\(P_\\text{buit} = 3{,}2 \\text{kW}\\). El grup motor (motor, reductor i transmissió) que acciona l’escala té un rendiment electromecànic \\(\\eta = 0{,}58\\). Determineu:
               <br><strong>a)</strong> La potència mecànica mitjana \\(P_p\\)
               addicional que cal per a pujar de manera simultània \\(n_p = 20 \\text{passatgers}\\). [1 punt]
               <br><strong>b)</strong> El nombre total \\(n_t\\) de passatgers que l’escala transporta en un dia. [0,5 punts]
               <br><strong>c)</strong> L’energia elèctrica total \\(E_t\\) que consumeix l’escala en un dia, considerant el consum elèctric en buit i el consum associat a pujar els passatgers. [1 punt]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) La potència mecànica</strong>
            <br>
            \\[
            m = 20 \\cdot 70{,}8 = 1416 \\text{kg}
            \\]
            \\[
            W = m \\cdot g \\cdot \\Delta h = 1416 \\cdot 9{,}81 \\cdot 6 = 83330 \\text{J}
            \\]
            \\[
            P_p = \\frac{W}{t_p} = \\frac{83330}{45} = 1{,}85 \\, \\text{kW}
            \\]
            <br>

            <strong>b) El nombre total de passatgers</strong>
            <br>
            - Temps total en segons:
            \\[
            t_f = 10 \\cdot 3600 = 3600 \\, \\text{s}
            \\]
            \\[
            N_\\text{viajes} = \\frac{36000}{45} = 800
            \\]
            \\[
            n_t = 800 \\cdot 20 = 16000 \\, \\text{passatgers}
            \\]
            <br>

            <strong>c) L’energia elèctrica total</strong>
            <br>
            - Potència elèctrica en pujar passatgers
            \\[
            P_\\text{el,p} = \\frac{P_p}{\\eta} = \\frac{1{,}85}{0{,}58} = 3{,}19 \\, \\text{kW}
            \\]
            - Potència elèctrica total en càrrega
            \\[
            P_\\text{el,tot} = 3{,}19 + 3{,}2 = 6{,}39 \\, \\text{kW}
            \\]
            \\[
            E = P_\\text{el,tot} \\cdot t_t = 6{,}39 \\cdot 10 = 63{,}9 \\, \\text{kW h}
            \\]<br>`,
    },

    //Exercici 4B
    {
        type: "exercicis",
        category: "energia",
        text: `Un vehicle consumeix una mitjana de 6,3 L cada 100 km quan circula a una velocitat 
               \\(v = 120 \\frac{km}{h}\\). El dipòsit de combustible del vehicle té una capacitat \\(V = 60 \\text{L}\\). El vehicle té la 
               tracció a l’eix davanter i, per a la velocitat v anterior, les rodes giren a una velocitat angular 
               \\(n_\\text{rodes} = 1004 min_\\text{-1}\\) (considerant que el vehicle avança en línia recta). Entre el motor tèrmic i 
               les rodes hi ha una transmissió mecànica de rendiment \\(\\eta_\\text{trans} = 0{,}92\\), i el rendiment tèrmic del 
               motor és \\(\\eta_\\text{mot} = 0{,}30\\). El combustible utilitzat té una densitat \\(\\rho = 0{,}75 \\frac{kg}{L}\\) i un poder calorífic 
               \\(p_c = 43{,}5 \\frac{MJ}{kg}\\). Si el vehicle circula a una velocitat \\(v = 120 \\frac{km}{h}\\), determineu:
               <br><strong>a)</strong> La distància estimada d que pot recórrer el vehicle si el dipòsit conté combustible fins al 80 % de la seva capacitat. [0,5 punts]
               <br><strong>b)</strong> La potència tèrmica mitjana consumida \\(P_\\text{tèrm}\\) [0,5 punts]
               <br><strong>c)</strong> La potència mecànica que arriba a les rodes \\(P_\\text{rodes}\\) i el parell total \\(\\Gamma_\\text{rodes}\\). [1 punt]
               <br><strong>d)</strong> La potència total que es dissipa en el motor i en la transmissió \\(P_\\text{diss}\\). [0,5 punts]
               <br>`,
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) La distància</strong>
            <br>
            \\[
            d = \\frac{48}{6{,}3} \\cdot 100 = 7{,}62 \\cdot 100 = 762 \\, \\text{km}
            \\]
            <br>

            <strong>b) La potència tèrmica </strong>
            <br>
            - Consum horari:
            \\[
            6{,}3 \\frac{L}{100\\, km} \\cdot 120 = 7{,}56 L/h
            \\]
            - Cabal màssic:
            \\[
            q = 7,56 \\cdot 0,75 = 5{,}67 \\text{kg/h}
            \\]
            - Potència tèrmica:
            \\[
            P_\\text{term} = \\frac{5{,}67\\cdot 43{,}5\\cdot 10^6}{3600} = 6{,}85\\cdot 10^4 \\, \\text{W} = 68{,}5 \\, \\text{kW}
            \\]
            <br>

            <strong>c) Potència mecànica a les rodes i parell</strong>
            <br>
            - Rendiment total:
            \\[
            \\eta_\\text{tot} = \\eta_\\text{mot} \\cdot \\eta_\\text{trans} = 0,30 \\cdot 0,92 = 0,276
            \\]
            \\[
            P_\\text{rodes} = 0,276 \\cdot 68,5 = 18,9 \\, \\text{kW}
            \\]
            - Velocitat angular:
            \\[
            n = \\frac{1004}{60} = 16,73 \\, \\text{rev/s}
            \\]
            \\[
            \\omega = 2 \\cdot \\pi \\cdot n = 2 \\cdot \\pi \\cdot 16,73 = 105 \\, \\text{rad/s}
            \\]
            - Parell
            \\[
            \\Gamma_\\text{ruedas} = \\frac{P}{\\omega} = \\frac{18900}{105} = 180 \\, \\text{Nm}
            \\]
            <br>

            <strong>d) Potència dissipada en motor i transmissió:</strong>
            <br>
            \\[
            P_\\text{diss} = P_\\text{term} - P_\\text{rodes} = 68,5 - 18,9 = 49,6 \\, \\text{kW}
            \\]
            <br>`,
    },
]
