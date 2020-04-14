package com.mycompany.oshi;

import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OperatingSystem;

public class HardFlowJFrame extends javax.swing.JFrame {
    SystemInfo systemInfo = new SystemInfo();
    HardwareAbstractionLayer hardwareInfo = systemInfo.getHardware();
    CentralProcessor cpu = hardwareInfo.getProcessor();
    GlobalMemory glb = hardwareInfo.getMemory();
    OperatingSystem operatingsystem = systemInfo.getOperatingSystem();
    
    public HardFlowJFrame() {
        initComponents();
        lblTotal.setText(String.format("A Quantidade de Memória Física Real: %.2f", Double.valueOf(glb.getTotal() / 1000000000))); //DIVIDIR POR UM BILHÃO PRA TRANFORMA E GIGABYTE
        lblTotal1.setText(String.format("Memória Total disponível atualmente: %.2f", Double.valueOf(glb.getAvailable()/ 1000000000)));
        lblPagina.setText(String.format("O número de bytes em uma página de memória: %.2f", Double.valueOf(glb.getPageSize()/ 1000000000)));
        lblCpu.setText(String.format("Nucleos: %.2f", Double.valueOf(cpu.getPhysicalProcessorCount())));
        lblId.setText(String.format("Id: %d2", Integer.valueOf(operatingsystem.getProcessId())));
        lblThred.setText(String.format("Quantidade de Threads em execução: %d2", Integer.valueOf(operatingsystem.getThreadCount())));
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        lblTotal = new javax.swing.JLabel();
        lblCpu = new javax.swing.JLabel();
        lblId = new javax.swing.JLabel();
        lblThred = new javax.swing.JLabel();
        lblTotal1 = new javax.swing.JLabel();
        lblPagina = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        lblTotal.setFont(new java.awt.Font("Tahoma", 0, 18)); // NOI18N
        lblTotal.setText("A Quantidade de Memória Física Real:");

        lblCpu.setFont(new java.awt.Font("Tahoma", 0, 18)); // NOI18N
        lblCpu.setText("Nucleos ");

        lblId.setFont(new java.awt.Font("Tahoma", 0, 18)); // NOI18N
        lblId.setText("Id:");

        lblThred.setFont(new java.awt.Font("Tahoma", 0, 18)); // NOI18N
        lblThred.setText("Quantidade de Threads em execução:");

        lblTotal1.setFont(new java.awt.Font("Tahoma", 0, 18)); // NOI18N
        lblTotal1.setText("Memória Total disponível atualmente:");

        lblPagina.setFont(new java.awt.Font("Tahoma", 0, 18)); // NOI18N
        lblPagina.setText("O número de bytes em uma página de memória:");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(lblTotal)
                    .addComponent(lblCpu)
                    .addComponent(lblId)
                    .addComponent(lblThred)
                    .addComponent(lblTotal1)
                    .addComponent(lblPagina))
                .addContainerGap(87, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(30, 30, 30)
                .addComponent(lblTotal)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(lblTotal1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(lblPagina, javax.swing.GroupLayout.PREFERRED_SIZE, 22, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(lblCpu)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(lblId)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(lblThred)
                .addContainerGap(86, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(HardFlowJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(HardFlowJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(HardFlowJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(HardFlowJFrame.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new HardFlowJFrame().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel lblCpu;
    private javax.swing.JLabel lblId;
    private javax.swing.JLabel lblPagina;
    private javax.swing.JLabel lblThred;
    private javax.swing.JLabel lblTotal;
    private javax.swing.JLabel lblTotal1;
    // End of variables declaration//GEN-END:variables
}
