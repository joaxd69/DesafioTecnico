"use client"
import Image from 'next/image'
import { useEffect,useState,ChangeEvent} from 'react';

export default function Home() {
  
  // navigator.bluetooth.getAvailability().then((available) => {
  //   if (available) {
  //     console.log("This device supports Bluetooth!");
  //   } else {
  //     console.log("Doh! Bluetooth is not supported");
  //   }
  // });
  
  const prueba = async()=>{
    
    await navigator.bluetooth.requestDevice(  { filters: [{ services: ['battery_service'] }] })
    .then((device:any) => {
      // Human-readable name of the device.
      console.log(device.name);
    
      // Attempts to connect to remote GATT Server.
      return device.gatt.connect();
    })
    .then(server => { console.log(server);
    })
    .catch(error => { console.error(error); });
  }
  const [actualFile,setactualFile]=useState<any>();

  const setMultimedia=async (event:any)=>{
     const file = event.target.files?.[0];
     const reader = new FileReader();
     reader.addEventListener('load', handleFileLoad);
     reader.readAsArrayBuffer(file);
  // Obtén el servicio GATT y la característica Bluetooth para enviar los datos
  // const device:any = await navigator.bluetooth.requestDevice();
  // const server = await device.gatt.connect();
  // const service = await server.getPrimaryService('...'); // ID del servicio Bluetooth
  // const characteristic = await service.getCharacteristic('...'); // ID de la característica Bluetooth
  
  }
  const handleFileLoad = (event:any) => {
    const arrayBuffer = event.target.result;
    const uint8Array = new Uint8Array(arrayBuffer);
    // Hacer algo con el Uint8Array (por ejemplo, enviarlo por Bluetooth)

    // Ejemplo: Imprimir los valores en la consola
    console.log(uint8Array);
  };



   const probando = async()=>{
    if ('bluetooth' in navigator) {///primer paso verificar disponibilidad
      // El navegador es compatible con la API Web Bluetooth
      console.log('si se puede');
      
    } else {
      // El navegador no es compatible con la API Web 
      console.log('no se puede');
      
    }
    const mediaControlService = '00001848-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const phoneAlertStatusService = '0000180E-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const telephoneBearerService = '0000184B-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const telephonyAndMediaAudioService = '00001855-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const volumeControlService = '00001844-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const volumeOffsetControlService = '00001845-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const weightScaleService = '0000181D-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const audioInputControlService = "00001843-0000-1000-8000-00805f9b34fb".toLowerCase();
    const audioStreamControlService = "0000184E-0000-1000-8000-00805f9b34fb".toLowerCase();
    const authorizationControlService = "0000183D-0000-1000-8000-00805f9b34fb".toLowerCase();
    const reconnectionConfigurationService = '00001829-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const referenceTimeUpdateService = '00001806-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const runningSpeedAndCadenceService = '00001814-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const scanParametersService = '00001813-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const transportDiscoveryService = '00001824-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const txPowerService = '00001804-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const userDataService = '0000181C-0000-1000-8000-00805f9b34fb'.toLowerCase();    
    const physicalActivityMonitorService = '0000183E-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const publicBroadcastAnnouncementService = '00001856-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const publishedAudioCapabilitiesService = '00001850-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const pulseOximeterService = '00001822-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const linkLossService = '00001803-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const locationAndNavigationService = '00001819-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const meshProvisioningService = '00001827-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const meshProxyService = '00001828-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const microphoneControlService = '0000184D-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const nextDSTChangeService = '00001807-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const objectTransferService = '00001825-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const humanInterfaceDeviceService = '00001812-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const immediateAlertService = '00001802-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const indoorPositioningService = '00001821-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const insulinDeliveryService = '0000183A-0000-1000-8000-00805f9b34fb'.toLowerCase();
    const internetProtocolSupportService = '00001820-0000-1000-8000-00805f9b34fb'.toLowerCase();
    


    const alertNotificationService = "00001811-0000-1000-8000-00805f9b34fb".toLowerCase();
    const automationIOService = "00001815-0000-1000-8000-00805f9b34fb".toLowerCase();
    const basicAudioAnnouncementService = "00001851-0000-1000-8000-00805f9b34fb".toLowerCase();
    const batteryService = "0000180F-0000-1000-8000-00805f9b34fb".toLowerCase();
    const binarySensorService = "0000183B-0000-1000-8000-00805f9b34fb".toLowerCase();


const bloodPressureService = '00001810-0000-1000-8000-00805f9b34fb'.toLowerCase();
const bodyCompositionService = '0000181B-0000-1000-8000-00805f9b34fb'.toLowerCase();
const bondManagementService = '0000181E-0000-1000-8000-00805f9b34fb'.toLowerCase();
const broadcastAudioAnnouncementService = '00001852-0000-1000-8000-00805f9b34fb'.toLowerCase();
const broadcastAudioScanService = '0000184F-0000-1000-8000-00805f9b34fb'.toLowerCase();
const commonAudioService = '00001853-0000-1000-8000-00805f9b34fb'.toLowerCase();
const constantToneExtensionService = '0000184A-0000-1000-8000-00805f9b34fb'.toLowerCase();
const continuousGlucoseMonitoringService = '0000181F-0000-1000-8000-00805f9b34fb'.toLowerCase();
const coordinatedSetIdentificationService = '00001846-0000-1000-8000-00805f9b34fb'.toLowerCase();
const currentTimeService = '00001805-0000-1000-8000-00805f9b34fb'.toLowerCase();
const cyclingPowerService = '00001818-0000-1000-8000-00805f9b34fb'.toLowerCase();
const cyclingSpeedAndCadenceService = '00001816-0000-1000-8000-00805f9b34fb'.toLowerCase();
const deviceInformationService = '0000180A-0000-1000-8000-00805f9b34fb'.toLowerCase();

const electronicShelfLabelService = '00001857-0000-1000-8000-00805f9b34fb'.toLowerCase();
const emergencyConfigurationService = '0000183C-0000-1000-8000-00805f9b34fb'.toLowerCase();
const environmentalSensingService = '0000181A-0000-1000-8000-00805f9b34fb'.toLowerCase();
const fitnessMachineService = '00001826-0000-1000-8000-00805f9b34fb'.toLowerCase();
const gamingAudioService = '00001858-0000-1000-8000-00805f9b34fb'.toLowerCase();

const genericAttributeService = '00001801-0000-1000-8000-00805f9b34fb'.toLowerCase();
const genericMediaControlService = '00001849-0000-1000-8000-00805f9b34fb'.toLowerCase();
const genericTelephoneBearerService = '0000184C-0000-1000-8000-00805f9b34fb'.toLowerCase();
const glucoseService = '00001808-0000-1000-8000-00805f9b34fb'.toLowerCase();
const healthThermometerService = '00001809-0000-1000-8000-00805f9b34fb'.toLowerCase();
const hearingAccessService = '00001854-0000-1000-8000-00805f9b34fb'.toLowerCase();
const heartRateService = '0000180D-0000-1000-8000-00805f9b34fb'.toLowerCase();
const httpProxyService = '00001823-0000-1000-8000-00805f9b34fb'.toLowerCase();

////0x2A05 Service Changed
///0x2B29 Client Supported Features
//Database Hash 0x2B2A
//Server Supported Features 0x2B3A
//00002a05-0000-1000-8000-00805f9b34fb
let options ={
  filters: [{
        manufacturerData: [{
          companyIdentifier: 0x00e0,
          dataPrefix: new Uint8Array([0x01, 0x02])
        }]}]}

   let dispositivo=await navigator.bluetooth.requestDevice({
   acceptAllDevices:true,
   optionalServices:[genericAttributeService]
  })
 
//aqui obtenemos un dispositivo
    let conectar=await dispositivo.gatt?.connect()///nos conectamos
    console.log(dispositivo.gatt); console.log('aqui nos conectamos con el dispositivo',dispositivo.gatt?.connected);
    console.log(conectar?.connected?'el dispositivo se conecto exitosamente': 'el dispositivo no se pudo conectar');///hasta aqui estamos conectado la conexion
    // conectar?.disconnect()
    // let paso2= await conectar?.getPrimaryService(genericAttributeService)
    // let características= await paso2?.getCharacteristic('00002a05-0000-1000-8000-00805f9b34fb')
    //  let includedservices=await características?.startNotifications()

    //  console.log(includedservices);
   }

   const verdispositivos=async()=>{
    let getdevice=await navigator.bluetooth.getDevices()
    console.log(getdevice);
    
   }


   async function onButtonClick(): Promise<void> {
    let serviceUuid = '00001801-0000-1000-8000-00805f9b34fb';
   
  
    let characteristicUuid = '00002a05-0000-1000-8000-00805f9b34fb';
  
  
    try {
      console.log('Requesting Bluetooth Device...');
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices:true,
        optionalServices:[serviceUuid]
       });
  
      console.log('Connecting to GATT Server...');
      const server = await device.gatt?.connect();
  
      console.log('Getting Service...');
      const service = await server?.getPrimaryService(serviceUuid);
  
      console.log('Getting Characteristic...');
      const characteristic = await service?.getCharacteristic(characteristicUuid);
  
      console.log('> Characteristic UUID:  ' + characteristic?.uuid);
      console.log('> Broadcast:            ' + characteristic?.properties.broadcast);
      console.log('> Read:                 ' + characteristic?.properties.read);
      console.log('> Write w/o response:   ' + characteristic?.properties.writeWithoutResponse);
      console.log('> Write:                ' + characteristic?.properties.write);
      console.log('> Notify:               ' + characteristic?.properties.notify);
      console.log('> Indicate:             ' + characteristic?.properties.indicate);
      console.log('> Signed Write:         ' + characteristic?.properties.authenticatedSignedWrites);
      console.log('> Queued Write:         ' + characteristic?.properties.reliableWrite);
      console.log('> Writable Auxiliaries: ' + characteristic?.properties.writableAuxiliaries);
    } catch (error) {
      console.log('Argh! ' + error);
    }
  }
  
  async function verbateria(): Promise<void> {
    try {
      console.log('Requesting Bluetooth Device...');
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices:true,
      optionalServices:['battery_service']
      });
      
      console.log('Connecting to GATT Server...');
      const server = await device.gatt?.connect();
  
      console.log('Getting Battery Service...');
      const service  = await server?.getPrimaryService('battery_service');
  
      console.log('Getting Battery Level Characteristic...');
      const characteristic  = await service?.getCharacteristic('battery_level');
  
      console.log('Reading Battery Level...');
      const value = await characteristic?.readValue();
  
      console.log('> Battery Level is ' + (value?.getUint8(0) ?? '') + '%');
    } catch (error: any) {
      console.log('Argh! ' + error);
    }
  }
  


  async function infodevice(): Promise<void> {
    const filters: any = [];
    let serviceUuid = '00001801-0000-1000-8000-00805f9b34fb';
   
  
    let characteristicUuid = '00002a05-0000-1000-8000-00805f9b34fb';
    const filterService = '00001801-0000-1000-8000-00805f9b34fb'
    

    
    const options: any = {};

      options.acceptAllDevices = true;
  
  
    try {
      console.log('Requesting Bluetooth Device...');
      console.log('with ' + JSON.stringify(options));
      const device = await navigator.bluetooth.requestDevice(options);
  
      console.log('> Name:             ' + device.name);
      console.log('> Id:               ' + device.id);
      console.log('> Connected:        ' + device.gatt?.connected);
    } catch (error) {
      console.log('Argh! ' + error);
    }
  }
  
  
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <section>
      <button onClick={probando}>prueba</button>
       <h1>Bienvenidos a mi pagina.</h1>
      <button onClick={verdispositivos}>ver dispositos</button>
      </section>
      <section className=' text-center'>
       <p>Esta es mi aplicacion web, aqui podremos enviar y recibir archivos multimedia atra vez de una conexion bluetooh</p>
        <p>Los archivos recibidos, como imagenes, videos o musicas seran enviados a mi servidor y guardados en una base de datos.
         Asi el usuario, tendra guardado sus archivos donde podra administrarlos.
        </p>

      </section>

      <section className='flex bg-emerald-100 w-[50rem] h-[15rem] justify-evenly p-5 items-center '>
        <div className='bg-[grey] w-[15rem] text-white h-[5rem] flex items-center justify-center'>
          <h1>Dispositivos disponibles.</h1>
        </div>
        <div className='bg-[grey] w-[15rem] text-white h-[5rem] flex items-center justify-center'>
          <h1>Activar bluetooh.</h1>
        </div>
        <input type="file" onChange={setMultimedia} name="" id="" />
      </section>

      
  <input id="service" type="text" list="services"  placeholder="Bluetooth Service"/>
  <input id="characteristic" type="text" list="characteristics" placeholder="Bluetooth Characteristic"/>
  <button onClick={onButtonClick}>Get Bluetooth characteristic properties</button>
    


    <button onClick={infodevice}>ver bateria</button>

    </main>
  )
}

/*  
0000181C-0000-1000-8000-00805f9b34fb
00001825-0000-1000-8000-00805f9b34fb
   services:['00001825-0000-1000-8000-00805f9b34fb', '00001848-0000-1000-8000-00805f9b34fb', '00001844-0000-1000-8000-00805f9b34fb', '0000183e-0000-1000-8000-00805f9b34fb', '00001847-0000-1000-8000-00805f9b34fb'] 

*/